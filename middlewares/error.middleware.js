const fs = require("fs");
const path = require("path");
const { SendResponse, StatusCodes } = require("../utils");

module.exports = (err, req, res, next) => {
    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        const validation_errors = err.errors.map((e) => e.message);

        SendResponse(res, StatusCodes.BAD_REQUEST, null, validation_errors);
    } else if (err.name === "SequelizeForeignKeyConstraintError") {
        SendResponse(res, StatusCodes.BAD_REQUEST, null, ["Foreign key constraint error."]);
    } else {
        const log_dir = path.join(__dirname, "../logs");
        const log_file = path.join(log_dir, "error.log");

        if (!fs.existsSync(log_dir)) {
            fs.mkdirSync(log_dir, { recursive: true });
        }

        if (!fs.existsSync(log_file)) {
            fs.writeFileSync(log_file, "");
        }

        fs.appendFileSync(log_file, `${new Date().toISOString()} - ${err.message}\n`);

        SendResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, null, [err.message]);
    }
};
