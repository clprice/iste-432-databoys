module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    saleid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    auctionid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bidid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    saledate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  })
  Sale.associate = function (models) { }
  return Sale
}