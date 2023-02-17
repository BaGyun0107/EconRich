const express = require("express");
const { dataAPI } = require("../controllers/api/dataAPI");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: dataAPI
 *   description: 공공 데이터 포털 임의의 API 구현
 */

router.post("/", dataAPI);

/**
 * @swagger
 * paths:
 *  /dataapi:
 *    post:
 *      summary: "공공 데이터 포털 임의의 API 구현"
 *      description: "공공 데이터 포털 임의의 API 구현"
 *      tags: [dataAPI]
 *      requestBody:
 *        description: 로그인 요청
 *        required: true
 *        content:
 *          application/json:
 *             schema:
 *                   example:
 *                          {
 *                             "sdate" : "20230217",
 *                             "stdHour" : "10"
 *                          }
 *      responses:
 *        "200":
 *          description: 날씨 정보 조회 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    data:
 *                      type: object
 *                      example:
 *                          [
 *                            {
 *                             "data": {
 *                               "info": {
 *                                 "count": 187,
 *                                 "list": [
 *                                          {
 *                                             "unitName": "죽전휴게소",
 *                                             "unitCode": "002 ",
 *                                             "routeName": "경부선",
 *                                             "routeNo": "0010",
 *                                             "stdHour": "10",
 *                                             "updownTypeCode": "E",
 *                                             "xValue": "127.104165",
 *                                             "yValue": "37.332651",
 *                                             "sdate": "20230216",
 *                                             "snowValue": "-99.000000",
 *                                             "addr": "경기도 용인시 수지구 풍덕천동 42-1",
 *                                             "tmxValue": "209231.370200",
 *                                             "tmyValue": "525935.874890",
 *                                             "measurement": "연천",
 *                                             "addrCode": "119",
 *                                             "addrName": "수원",
 *                                             "weatherContents": "흐림",
 *                                             "statusNo": "-99.000000",
 *                                             "correctNo": "26.180000",
 *                                             "cloudValue": "9.000000",
 *                                             "addcloudValue": "9.000000",
 *                                             "cloudformValue": "-99.000000",
 *                                             "tempValue": "2.500000",
 *                                             "dewValue": "-2.200000",
 *                                             "discomforeValue": "-99.00",
 *                                             "sensoryTemp": "-99.000000",
 *                                             "highestTemp": "-99.00",
 *                                             "highestyearTemp": "-99.00",
 *                                             "highestcompTemp": "-99.000000",
 *                                             "lowestTemp": "-99.000000",
 *                                             "lowestyearTemp": "-99.000000",
 *                                             "lowestcompTemp": "-99.000000",
 *                                             "rainfallValue": "0.000000",
 *                                             "rainfallstrengthValue": "-99.000000",
 *                                             "newsnowValue": "-99.000000",
 *                                             "humidityValue": "71.000000",
 *                                             "windContents": "23",
 *                                             "windValue": "3.200000"
 *                                            }
 *                                         ],
 *                                 "message": "인증키가 유효합니다.",
 *                                 "code": "SUCCESS"
 *                                }
 *                              },
 *                             "message": "날씨 정보 조회 성공"
 *                           }
 *                         ]
 *        "404":
 *          description: 날씨 정보가 존재하지 않습니다!
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                data :
 *                 type :  object
 *                example :
 *                    {message : "날씨 정보가 존재하지 않습니다!"}
 */

module.exports = router;
