const express = require("express");
const {
  departmentsInformation,
  salaryIncrease,
} = require("../controllers/department/department");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: departments
 *   description: 부서 관련 API
 */

router.get("/:id", departmentsInformation);
router.patch("/increase/:id", salaryIncrease);

/**
 * @swagger
 * paths:
 *  /departments/id:
 *    get:
 *      summary: "부서 정보 조회"
 *      description: "부서 정보 조회"
 *      tags: [departments]
 *      parameters:
 *      - in : path
 *        name : id
 *        required : true
 *        description : departments의 id
 *        schema:
 *          type: Number
 *      responses:
 *        "200":
 *          description: 부서 정보 조회 성공
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
 *                              "data": {
 *                                  "departments": {
 *                                      "department_id": 10,
 *                                      "department_name": "Administration",
 *                                      "manager_id": 200,
 *                                      "location_id": 1700,
 *                                      "location": {
 *                                          "location_id": 1700,
 *                                          "street_address": "2004 Charade Rd",
 *                                          "postal_code": "98199",
 *                                          "city": "Seattle",
 *                                          "state_province": "Washington",
 *                                          "country_id": "US",
 *                                          "country": {
 *                                              "country_id": "US",
 *                                              "country_name": "United States of America",
 *                                              "region_id": 2
 *                                          }
 *                                      }
 *                                  }
 *                              },
 *                              "message": "부서 정보 조회 성공"
 *                            }
 *                          ]
 *        "404":
 *          description: 부서 정보 조회 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                data :
 *                 type :  object
 *                example :
 *                    {
 *                    "success": false,
 *                    "status": 404,
 *                    "message": "해당 부서는 존재하지 않습니다!",
 *                    "stack": "Error: 해당 부서는 존재하지 않습니다!\n    at createError (/Users/BaGyun/Desktop/Practice/EconRich/sever/utils/error.js:2:15)\n    at departmentsInformation (/Users/BaGyun/Desktop/Practice/EconRich/sever/controllers/department/department.js:28:19)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"
 *                    }
 */

/**
 * @swagger
 * paths:
 *  /departments/increase/:id:
 *    patch:
 *      summary: "특정 부서의 급여 인상 및 업데이트"
 *      description: "특정 부서의 급여 인상 및 업데이트"
 *      tags: [departments]
 *      parameters:
 *      - in : path
 *        name : id
 *        required : true
 *        description : departments의 id
 *        schema:
 *          type: Number
 *      responses:
 *        "200":
 *          description: 급여 인상 및 업데이트 성공
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
 *                                "data": {
 *                                    "employees": [
 *                                        {
 *                                            "employee_id": 100,
 *                                            "first_name": "Steven",
 *                                            "last_name": "King",
 *                                            "email": "SKING",
 *                                            "phone_number": "515.123.4567",
 *                                            "hire_date": "1987-06-17",
 *                                            "job_id": "AD_PRES",
 *                                            "salary": "3909.34",
 *                                            "commission_pct": null,
 *                                            "manager_id": null,
 *                                            "department_id": 90
 *                                        },
 *                                        {
 *                                            "employee_id": 101,
 *                                            "first_name": "Neena",
 *                                            "last_name": "Kochhar",
 *                                            "email": "NKOCHHAR",
 *                                            "phone_number": "515.123.4568",
 *                                            "hire_date": "1989-09-21",
 *                                            "job_id": "AD_VP",
 *                                            "salary": "2769.11",
 *                                            "commission_pct": null,
 *                                            "manager_id": 100,
 *                                            "department_id": 90
 *                                        },
 *                                        {
 *                                            "employee_id": 102,
 *                                            "first_name": "Lex",
 *                                            "last_name": "De Haan",
 *                                            "email": "LDEHAAN",
 *                                            "phone_number": "515.123.4569",
 *                                            "hire_date": "1993-01-13",
 *                                            "job_id": "AD_VP",
 *                                            "salary": "2769.11",
 *                                            "commission_pct": null,
 *                                            "manager_id": 100,
 *                                            "department_id": 90
 *                                        }
 *                                    ]
 *                                },
 *                                "message": "연봉 인상 성공"
 *                            }
 *                          ]
 *        "404":
 *          description: 부서 정보 조회 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                data :
 *                 type :  object
 *                example :
 *                    {
 *                    "success": false,
 *                    "status": 404,
 *                    "message": "해당 부서는 존재하지 않습니다!",
 *                    "stack": "Error: 해당 부서는 존재하지 않습니다!\n    at createError (/Users/BaGyun/Desktop/Practice/EconRich/sever/utils/error.js:2:15)\n    at departmentsInformation (/Users/BaGyun/Desktop/Practice/EconRich/sever/controllers/department/department.js:28:19)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"
 *                    }
 */

module.exports = router;
