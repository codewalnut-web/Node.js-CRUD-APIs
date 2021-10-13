'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('dealers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      owner_name: {
        type: Sequelize.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      owner_mobile: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      owner_email: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null
      },
      dealer_logo: {
        type: Sequelize.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      gst_number: {
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
      deleted_at:{
        allowNull: true,
        type: Sequelize.DATE
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('dealers');
  }
};
