const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('countries', {
    country_id: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    country_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    region_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'regions',
        key: 'region_id'
      }
    }
  }, {
    sequelize,
    tableName: 'countries',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
      {
        name: "region_id",
        using: "BTREE",
        fields: [
          { name: "region_id" },
        ]
      },
    ]
  });
};
