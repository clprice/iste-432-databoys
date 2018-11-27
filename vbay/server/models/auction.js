module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define('Auction', {
    auctionid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
    },
    userid: {
      allowNull: false,
      type: DataTypes.STRING,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'userid'
      }
    },
    gameid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Games',
        key: 'gameid'
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startprice: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  })
  Auction.associate = (models) => {
    Auction.belongsTo(models.User, {
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })
    Auction.belongsTo(models.Game, {
      foreignKey: 'gameid',
      onDelete: 'CASCADE'
    })
    Auction.hasMany(models.Bid, {
      foreignKey: 'auctionid',
      as: 'bids'
    })
  }
  return Auction
}