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
  }, {})
  Game.associate = (models) => {
    Game.hasMany(models.Auction, {
      onDelete: 'CASCADE'
    })
    Game.hasMany(models.Trade, {
      onDelete: 'CASCADE'
    })
    Game.hasMany(models.Offer, {
      onDelete: 'CASCADE'
    })
  }
  return Game
}