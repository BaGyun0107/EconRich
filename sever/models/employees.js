const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    employee_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hire_date: {
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
    salary: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: false
    },
    commission_pct: {
      type: DataTypes.DECIMAL(2,2),
      allowNull: true
    },
    manager_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'employees',
        key: 'employee_id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      references: {
        model: 'departments',
        key: 'department_id'
      }
    }
  }, {
    sequelize,
    tableName: 'employees',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "employee_id" },
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
