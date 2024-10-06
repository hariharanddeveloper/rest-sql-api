const { DataTypes } = require("sequelize");
const { Sequelize } = require("../configs");

const UserModel = Sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "id is required.",
                },
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Name is required.",
                },
                notEmpty: {
                    msg: "Name cannot be empty.",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "Email must be unique.",
            },
            validate: {
                notNull: {
                    msg: "Email is required.",
                },
                isEmail: {
                    msg: "Email must be a valid email address.",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Password is required.",
                },
                notEmpty: {
                    msg: "Password cannot be empty.",
                },
                len: {
                    args: [6, 100],
                    msg: "Password must be at least 6 characters long.",
                },
            },
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "createdAt is required.",
                },
            },
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "updatedAt is required.",
                },
            },
        },
    },
    {
        timestamps: true,
        tableName: "Users",
    }
);

module.exports = UserModel;
