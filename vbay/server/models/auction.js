module.exports = (sequelize, DataTypes) => {
  const Auction = sequelize.define('Auction', {
    auctionid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gameid: {
      type: DataTypes.INTEGER,
      allowNull: false
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
  });
  Auction.associate = (models) => {
    Auction.hasMany(Models.Bid)
  };
  return Auction;
};