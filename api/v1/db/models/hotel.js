'use strict';
module.exports = (sequelize, DataTypes) => {
  const hotel = sequelize.define('hotel', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  hotel.associate = function(models) {
    // associations can be defined here
  };
  return hotel;
};