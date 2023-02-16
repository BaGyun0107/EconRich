const { sequelize } = require("../../models");
const initModels = require("../../models/init-models");
const Models = initModels(sequelize);
const createError = require("../../utils/error");

const departmentsInformation = async (req, res, next) => {
  //? 부서 및 위치 정보 조회 가능한 API 구현
  try {
    const { id } = req.params;

    const departments = await Models.departments.findOne({
      where: { department_id: id },
      include: [
        {
          model: Models.locations,
          as: "location",
          include: [
            {
              model: Models.countries,
              as: "country",
            },
          ],
        },
      ],
    });

    if (!departments)
      return next(createError(404, "해당 부서는 존재하지 않습니다!"));

    return res.status(200).send({
      data: { departments: departments },
      message: "부서 정보 조회 성공",
    });
  } catch (err) {
    next(err);
  }
};

const salaryIncrease = async (req, res, next) => {
  //? 특정 부서의 급여 인상 및 업데이트 가능한 API 구현
  try {
    const { id } = req.params;
    const { increase } = req.body;

    const departments = await Models.departments.findOne({
      where: { department_id: id },
    });

    if (!departments)
      return next(createError(404, "해당 부서는 존재하지 않습니다!"));

    const employees = await Models.employees.findAll({
      where: { department_id: id },
    });

    if (employees.length === 0)
      return next(createError(404, "해당 부서의 사원은 존재하지 않습니다!"));

    const transaction = await sequelize.transaction();

    try {
      for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];
        console.log(`연봉확인 : ${employee.salary}`);
        const salary = (
          Number(employee.salary) +
          (employee.salary * increase) / 100
        ).toFixed(2);
        console.log(`연봉인상확인 : ${salary}`);
        await Models.employees.update(
          { salary: salary },
          { where: { employee_id: employee.employee_id } },
          { transaction }
        );
      }
      await transaction.commit();

      const newEmployees = await Models.employees.findAll({
        where: { department_id: id },
      });

      return res.status(200).send({ data: { employees: newEmployees } });
    } catch (err) {
      await transaction.rollback();
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { departmentsInformation, salaryIncrease };
