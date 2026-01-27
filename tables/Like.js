import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Like = sequelize.define("Like", {
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  PostId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: true
});

export default Like;