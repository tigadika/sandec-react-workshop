"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = require("../categories.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      delete el.id;
      return el;
    });
    await queryInterface.bulkInsert("Categories", categories);

    const menus = require("../menus.json").map((el) => {
      el.createdAt = el.updatedAt = new Date();
      delete el.id;
      return el;
    });

    await queryInterface.bulkInsert("Menus", menus);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Menus", null, {});
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
