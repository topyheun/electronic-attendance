const path = require('path');
const Sequelize = require('sequelize');
// const config = require(path.join(__dirname, '..', 'config', 'config.json'));
let db = {};
const sequelize = new Sequelize(
  'sh', //데이터베이스
  'root', //사용자 이름
  'asd1616', //비밀번호
  { host: 'localhost', dialect: 'mysql' },
); //사용 할 데이터베이스 종류
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.student = require('./student')(sequelize, Sequelize);
db.professor = require('./professor')(sequelize, Sequelize);
db.classs = require('./classs')(sequelize, Sequelize);
db.sugang = require('./sugang')(sequelize, Sequelize);
db.check = require('./check')(sequelize, Sequelize);

module.exports = db;
