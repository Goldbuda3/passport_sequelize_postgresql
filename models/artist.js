'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    name: DataTypes.STRING,
    dob: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
  };
  return artist;
};