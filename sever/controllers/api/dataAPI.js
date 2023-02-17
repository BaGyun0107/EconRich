require("dotenv").config();
const axios = require("axios");
const createError = require("../../utils/error");

const dataAPI = async (req, res, next) => {
  //? 날씨 정보 조회 가능한 API 구현
  const { sdate, stdHour } = req.body;

  const url = `
  http://data.ex.co.kr/openapi/restinfo/restWeatherList?key=${process.env.SERVICE_KEY}&type=json&sdate=${sdate}&stdHour=${stdHour}
  `;

  const info = await axios.get(url).catch((err) => {
    res.send(err);
  });

  if (info.data.list.length === 0)
    return next(createError(404, "날씨 정보가 존재하지 않습니다!"));

  return res.status(200).send({
    data: { info: info.data },
    message: "날씨 정보 조회 성공",
  });
};

module.exports = { dataAPI };
