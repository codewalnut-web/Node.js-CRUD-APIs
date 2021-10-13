'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var dealer_address =  sequelize.define('dealer_address',{
      branch_name: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      address_type: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      mobile: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        defaultValue: null,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      updated_by: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 1,
      },
     
  });
 
  dealer_address.associate = function(models){
    dealer_address.belongsTo(models.dealers,{
      foreignKey:'dealerId',
    })
  }
 
  return dealer_address;
};