'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dealer_addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      dealerId: {
        type: Sequelize.BIGINT,
        defaultValue: null,
        allowNull: true,
        references: {
          model: "dealers",
          key: "id",
          as: "dealers"
        }
      },
      branch_name: {
        type: Sequelize.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      address_type: {
        type: Sequelize.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      mobile: {
        type: Sequelize.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      created_by: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      updated_by: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dealer_addresses');
  }
};