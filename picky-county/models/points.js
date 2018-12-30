module.exports = function(sequelize, DataTypes) {
  var Points = sequelize.define("Points", {
    team: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER(40),
      allowNull: false
    },
    user: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    event: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  });
  return Points;
};
