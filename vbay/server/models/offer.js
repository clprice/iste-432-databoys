module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    offerid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tradeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    gameid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  Offer.associate = function (models) {
    Offer.hasOne(models.CompleteTrade)
  };
  return Offer;
};