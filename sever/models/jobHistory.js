const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobHistory', {
    employee_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    job_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      references: {
        model: 'jobs',
        key: 'job_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'department_id'
      }
    }
  }, {
    sequelize,
    tableName: 'jobHistory',
    timestamps: false,
    indexes: [
      {
        name: "employee_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employee_id" },
          { name: "start_date" },
        ]
      },
      {
        name: "job_id",
        using: "BTREE",
        fields: [
          { name: "job_id" },
        ]
      },
      {
        name: "department_id",
        using: "BTREE",
        fields: [
          { name: "department_id" },
        ]
      },
    ]
  });
};
