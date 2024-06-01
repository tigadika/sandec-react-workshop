"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsTo(models.Category, { foreignKey: "category" });
    }
  }
  Menu.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.STRING,
      imgUrl: DataTypes.STRING,
      category: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Menu",
    },
  );
  return Menu;
};
