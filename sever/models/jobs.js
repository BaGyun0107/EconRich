const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobs', {
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING(35),
      allowNull: false
    },
    min_salary: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    max_salary: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jobs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "job_id" },
        ]
      },
    ]
  });
};
