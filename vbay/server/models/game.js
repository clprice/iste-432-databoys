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
  Game.associate = (models) => {
    Game.hasMany(models.Auction)
    Game.hasMany(models.Trade)
    Game.hasMany(models.Offer)
  }
  return Game;
};