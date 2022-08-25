const express = require('express');

const sequelize = require('./models').sequelize;
const app = express();
const route = require('./routes');

sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//localhost:4000의 모든경로를 routes로
app.use('/', route);

// next
app.use((err, req, res, next) => {
  console.log(err + '에러났다');
});
app.listen(4000, () => {
  console.log(`port on 4000`);
});
