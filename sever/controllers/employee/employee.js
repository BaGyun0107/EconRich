const { sequelize } = require("../../models");
const initModels = require("../../models/init-models");
const Models = initModels(sequelize);
const createError = require("../../utils/error");

const currentInformation = async (req, res, next) => {
  //? 특정 사원의 현재 정보 조회 가능한 API 구현
  try {
    const { id } = req.params;

    console.log(req.params.id);
    const employees = await Models.employees.findAll({
      where: { employee_id: id },
    });

    // console.log(employees);
    if (!employees)
      return next(createError(404, "해당 사원은 존재하지 않습니다!"));

    return res.status(200).send({ data: { employees: employees } });
  } catch (err) {
    next(err);
  }
};

module.exports = { currentInformation };
