module.exports = function(sequelize, DataTypes) {
  var Houses = sequelize.define("Houses", {
    team: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
  });
  return Houses;
};
