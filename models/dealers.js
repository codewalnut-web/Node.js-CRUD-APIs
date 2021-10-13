"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var dealers = sequelize.define("dealers", {
    name: {
      type: DataTypes.STRING(100),
      defaultValue: null,
      allowNull: true
    },
    owner_name: {
      type: DataTypes.STRING(100),
      defaultValue: null,
      allowNull: true
    },
   
    owner_mobile: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null
    },
    owner_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null
    },
    dealer_logo: {
      type: DataTypes.STRING(100),
      defaultValue: null,
      allowNull: true
    },
    gst_number: {
      type: DataTypes.STRING(100),
      defaultValue: null,
      allowNull: true
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 1
    },
    deleted_at:{
      allowNull: true,
      type: DataTypes.DATE
    }
  });
  
  return dealers;
};
