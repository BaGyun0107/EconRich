var DataTypes = require("sequelize").DataTypes;
var _countries = require("./countries");
var _departments = require("./departments");
var _employees = require("./employees");
var _job_history = require("./job_history");
var _jobs = require("./jobs");
var _locations = require("./locations");
var _regions = require("./regions");

function initModels(sequelize) {
  var countries = _countries(sequelize, DataTypes);
  var departments = _departments(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var job_history = _job_history(sequelize, DataTypes);
  var jobs = _jobs(sequelize, DataTypes);
  var locations = _locations(sequelize, DataTypes);
  var regions = _regions(sequelize, DataTypes);

  locations.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(locations, { as: "locations", foreignKey: "country_id"});
  employees.belongsTo(departments, { as: "department_department", foreignKey: "department_id"});
  departments.hasMany(employees, { as: "employees", foreignKey: "department_id"});
  job_history.belongsTo(departments, { as: "department", foreignKey: "department_id"});
  departments.hasMany(job_history, { as: "job_histories", foreignKey: "department_id"});
  departments.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(departments, { as: "departments", foreignKey: "manager_id"});
  employees.belongsTo(employees, { as: "manager", foreignKey: "manager_id"});
  employees.hasMany(employees, { as: "employees", foreignKey: "manager_id"});
  job_history.belongsTo(employees, { as: "employee", foreignKey: "employee_id"});
  employees.hasMany(job_history, { as: "job_histories", foreignKey: "employee_id"});
  employees.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(employees, { as: "employees", foreignKey: "job_id"});
  job_history.belongsTo(jobs, { as: "job", foreignKey: "job_id"});
  jobs.hasMany(job_history, { as: "job_histories", foreignKey: "job_id"});
  departments.belongsTo(locations, { as: "location", foreignKey: "location_id"});
  locations.hasMany(departments, { as: "departments", foreignKey: "location_id"});
  countries.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(countries, { as: "countries", foreignKey: "region_id"});

  return {
    countries,
    departments,
    employees,
    job_history,
    jobs,
    locations,
    regions,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
