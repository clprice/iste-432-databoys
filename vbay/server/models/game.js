module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Game.associate = function (models) {
    // associations can be defined here
  };
  return Game;
};