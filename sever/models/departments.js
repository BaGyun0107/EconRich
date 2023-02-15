const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    department_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    department_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    manager_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    },
    location_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'locations',
        key: 'location_id'
      }
    }
  }, {
    sequelize,
    tableName: 'departments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
      {
        name: "location_id",
        using: "BTREE",
        fields: [
          { name: "location_id" },
        ]
      },
      {
        name: "manager_id",
        using: "BTREE",
        fields: [
          { name: "manager_id" },
        ]
      },
    ]
  });
};
