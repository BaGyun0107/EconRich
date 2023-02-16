const { sequelize } = require("../../models");
const initModels = require("../../models/init-models");
const Models = initModels(sequelize);
const createError = require("../../utils/error");

const { QueryTypes } = require("sequelize");
const db = require("../../models");

const employeesInformation = async (req, res, next) => {
  //? 특정 사원의 현재 정보 조회 가능한 API 구현
  try {
    const { id } = req.params;

    const employees = await Models.employees.findOne({
      where: { employee_id: id },
    });

    if (!employees)
      return next(createError(404, "해당 사원은 존재하지 않습니다!"));

    return res.status(200).send({ data: { employees: employees } });
  } catch (err) {
    next(err);
  }
};

const jobHistory = async (req, res, next) => {
  //? 특정 사원의 이력 정보 조회 가능한 API 구현
  try {
    const { id } = req.params;
    const query = `
    SELECT E.employee_id, E.first_name, E.last_name, J.job_id, J.start_date, J.end_date, J.department_id
    FROM EconRich.jobHistory AS J JOIN EconRich.employees AS E ON ( J.employee_id = E.employee_id )
    WHERE E.employee_id=${id}`;

    const jobhistories = await db.sequelize.query(query, {
      type: QueryTypes.SELECT,
    });

    if (jobhistories.length === 0)
      return next(createError(404, "해당 사원의 이력은 존재하지 않습니다."));

    return res.status(200).send({ data: { jobhistories: jobhistories } });
  } catch (err) {
    next(err);
  }
};

module.exports = { employeesInformation, jobHistory };
