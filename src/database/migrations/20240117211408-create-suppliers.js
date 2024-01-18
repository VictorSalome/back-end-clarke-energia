"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('suppliers', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      supplier_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      supplier_state: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      supplier_kwh: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      supplier_minkwh: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      supplier_totalcustomers: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      supplier_assessment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      supplier_url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,

      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {

    await queryInterface.dropTable('suppliers');

  }
};
