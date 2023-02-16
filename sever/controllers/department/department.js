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

    return res.status(200).send({ data: { departments: departments } });
  } catch (err) {
    next(err);
  }
};

module.exports = { departmentsInformation };
