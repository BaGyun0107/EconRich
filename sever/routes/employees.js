const express = require("express");
const {
  employeesInformation,
  jobHistory,
} = require("../controllers/employee/employee");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: employees
 *   description: 사원 관련 API
 */

router.get("/:id", employeesInformation);
router.get("/jobHistory/:id", jobHistory);

/**
 * @swagger
 * paths:
 *  /employees/:id:
 *    get:
 *      summary: "사원 현재 정보 조회"
 *      description: "사원 현재 정보 조회"
 *      tags: [employees]
 *      parameters:
 *      - in : path
 *        name : id
 *        required : true
 *        description : employees의 id
 *        schema:
 *          type: Number
 *      responses:
 *        "200":
 *          description: 사원 현재 정보 조회 성공
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
 *                                    "employees": {
 *                                        "employee_id": 101,
 *                                        "first_name": "Neena",
 *                                        "last_name": "Kochhar",
 *                                        "email": "NKOCHHAR",
 *                                        "phone_number": "515.123.4568",
 *                                        "hire_date": "1989-09-21",
 *                                        "job_id": "AD_VP",
 *                                        "salary": "2637.25",
 *                                        "commission_pct": null,
 *                                        "manager_id": 100,
 *                                        "department_id": 90
 *                                    }
 *                                },
 *                                "message": "사원 정보 조회 성공"
 *                            }
 *                          ]
 *        "404":
 *          description: 사원 정보 조회 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                data :
 *                 type :  object
 *                example :
 *                    {
 *                        "success": false,
 *                        "status": 404,
 *                        "message": "해당 사원은 존재하지 않습니다!",
 *                        "stack": "Error: 해당 사원은 존재하지 않습니다!\n    at createError (/Users/BaGyun/Desktop/Practice/EconRich/sever/utils/error.js:2:15)\n    at employeesInformation (/Users/BaGyun/Desktop/Practice/EconRich/sever/controllers/employee/employee.js:19:19)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"
 *                    }
 */

/**
 * @swagger
 * paths:
 *  /employees/jobHistory/:id:
 *    get:
 *      summary: "사원 이력 정보 조회"
 *      description: "사원 이력 정보 조회"
 *      tags: [employees]
 *      parameters:
 *      - in : path
 *        name : id
 *        required : true
 *        description : employees의 id
 *        schema:
 *          type: Number
 *      responses:
 *        "200":
 *          description: 사원 이력 조회 성공
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
 *                                    "jobhistories": [
 *                                        {
 *                                            "employee_id": 101,
 *                                            "first_name": "Neena",
 *                                            "last_name": "Kochhar",
 *                                            "job_id": "AC_ACCOUNT",
 *                                            "start_date": "1989-09-21",
 *                                            "end_date": "1993-10-27",
 *                                            "department_id": 110
 *                                        },
 *                                        {
 *                                            "employee_id": 101,
 *                                            "first_name": "Neena",
 *                                            "last_name": "Kochhar",
 *                                            "job_id": "AC_MGR",
 *                                            "start_date": "1993-10-28",
 *                                            "end_date": "1997-03-15",
 *                                            "department_id": 110
 *                                        }
 *                                    ]
 *                                },
 *                                "message": "사원 이력 조회 성공"
 *                            }
 *                          ]
 *        "404":
 *          description: 사원 이력 조회 실패
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                data :
 *                 type :  object
 *                example :
 *                    {
 *                        "success": false,
 *                        "status": 404,
 *                        "message": "해당 사원의 이력은 존재하지 않습니다.",
 *                        "stack": "Error: 해당 사원의 이력은 존재하지 않습니다.\n    at createError (/Users/BaGyun/Desktop/Practice/EconRich/sever/utils/error.js:2:15)\n    at jobHistory (/Users/BaGyun/Desktop/Practice/EconRich/sever/controllers/employee/employee.js:43:19)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"
 *                    }
 */

module.exports = router;
