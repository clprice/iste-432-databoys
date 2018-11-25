module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    offerid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })
  Offer.associate = function (models) {
    Offer.belongsTo(models.User, {
      foreignKey: 'offer_userid',
      onDelete: 'CASCADE'
    })
    Offer.belongsTo(models.Trade, {
      foreignKey: 'offer_tradeid',
      onDelete: 'CASCADE'
    })
    Offer.belongsTo(models.Game, {
      foreignKey: 'offer_gameid',
      onDelete: 'CASCADE'
    })
    Offer.hasOne(models.CompletedTrade, {
      onDelete: 'CASCADE'
    })
  }
  return Offer
}