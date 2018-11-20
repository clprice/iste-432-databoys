module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    tradeid: DataTypes.INTEGER,
    gameid: DataTypes.STRING,
    userid: DataTypes.STRING,
    description: DataTypes.STRING,
    condition: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Trade.associate = (models) => {

  };
  return Trade;
};