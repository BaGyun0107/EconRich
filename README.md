# EconRich 과제

## 구현 스펙
* [X] 임의의 더미데이터가 삽입되어있는 DB 스키마 구성
 * Oracle 의 HR 스키마의 더미데이터 사용 ( 데이터 추가 필요 )
 * 더미데이터 .sql 파일을 받아서 MySQL Workbench로 불러온 뒤 sequelize-auto를 사용하여 models 파일을 생성하였습니다.
 * DB 스키마는 EER Diagram을 활용하여 png로 추출하였습니다.
* [X] API에서 제공하는 기능은 GET/POST 등의 방식의 Method Type을 활용하여 구축할 것
* [X] 응답의 Response 규격은 json 혹은 XML 방식으로 구성

## 구현 기능
* [X] 특정 사원의 현재 정보 조회 가능한 API 구현
 * findOne을 활용해 req.params로 id를 받아 특정 사원의 정보를 조회하도록 구현했습니다.
* [X] 특정 사원의 이력 정보 조회 가능한 API 구현
 * jobHistory 테이블이 findAll로 조회되지않아 query문을 직접 작성하여 join문을 활용해 특정 사원의 id, 이름을 함께 조회할 수 있도록 구현했습니다. 
* [X] 부서 및 위치 정보 조회 가능한 API 구현
 * 부서 테이블에 장소, 장소 테이블에 나라 테이블이 속해있는 것을 확인 후 전부 묶어서 조회할 수 있도록 구현했습니다.
* [X] 특정 부서의 급여를 특정 비율로 인상 및 사원 정보 업데이트 할 수 있는 API 구현
 * 해당 부서에 속해있는 사원들의 데이터를 얻고 해당 사원의 급여를 인상 및 업데이트 하는 로직을 작성했으며,
 * 트랜잭션으로 불가피한 오류로 인해 인상이 안되는 사람이 없게끔 작성하였습니다.
* [X] RDBMS 스키마와 별개로 공공 데이터 포털( www.data.go.or ) 등에서 임의의 API 선택 후 조회 가능하도록 커스터마이징된 API 구현
 * 공공 데이터 포털에서 key 발급 후 조회 가능하도록 구현했습니다.
## 주의사항
* [X] 확인 가능한 API 명세서 제공이 필요합니다.
 * swagger를 활용하여 API 명세서를 작성하였습니다.
 * http://ec2-54-180-156-165.ap-northeast-2.compute.amazonaws.com/swagger
* [X] AWS 미사용시에도 상시 확인 가능한 URL 공유해 주시면 됩니다
 * AWS EC2로 서버를 창설 후 PM2로 상시 서버를 열어둔 상태입니다.
 * http://ec2-54-180-156-165.ap-northeast-2.compute.amazonaws.com


## DB 스키마
<img src="https://user-images.githubusercontent.com/95732945/219212458-934b3742-98f6-4345-b35b-616a45a2899c.png" width="70%" height='20%' />
