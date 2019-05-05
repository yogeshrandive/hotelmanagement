'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('guest', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};