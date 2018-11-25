module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define('Game', {
    gameid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  Game.associate = (models) => {
    Game.hasMany(models.Auction, {
      foreignKey: 'auction_gameid',
      onDelete: 'CASCADE'
    })
    Game.hasMany(models.Trade, {
      foreignKey: 'trade_gameid',
      onDelete: 'CASCADE'
    })
    Game.hasMany(models.Offer, {
      foreignKey: 'offer_gameid',
      onDelete: 'CASCADE'
    })
  }
  return Game
}