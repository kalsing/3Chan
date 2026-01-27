import sequelize from "../database.js";
import { DataTypes } from "sequelize";



const User = sequelize.define("User", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  lastName: {
    type: DataTypes.STRING,
    unique: true
  },
});

export default User;
