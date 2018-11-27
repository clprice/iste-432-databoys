module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    offerid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true
    },
    userid: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'userid'
      }
    },
    tradeid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Trades',
        key: 'tradeid'
      }
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
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })
    Offer.belongsTo(models.Trade, {
      foreignKey: 'tradeid',
      onDelete: 'CASCADE'
    })
    Offer.belongsTo(models.Game, {
      foreignKey: 'gameid',
      onDelete: 'CASCADE'
    })
    Offer.hasOne(models.CompletedTrade, {
      foreignKey: 'completionid'
    })
  }
  return Offer
}