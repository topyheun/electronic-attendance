const models = require('../models');

//수강 등록
module.exports.requestclass = async (req, res, next) => {
  try {
    console.log(req.body.class);
    console.log(req.body.point);

    if (req.body.point === 'check') {
      await models.sugang.create({
        student_id: req.body.email,
        class_name: req.body.class,
      });
    }
    await res.status(200).json('성공');
  } catch (err) {
    next(err);
  }
};

//출석체크
module.exports.gogo = async (req, res, next) => {
  try {
    console.log(req.body.class);
    console.log(req.body.point);

    if (req.body.point === 'check') {
      await models.check.create({
        student_id: req.body.email,
        class_name: req.body.class,
      });
    }

    await res.status(200).json('성공');
  } catch (err) {
    next(err);
  }
};

//교수 등록
module.exports.professor = async (req, res, next) => {
  try {
    console.log(req.body);
    await models.professor.create({
      professor_id: req.body.email,
      professor_pw: req.body.password,
      name: req.body.name,
    });

    res.status(200).json({ professor: '교수등록완료' });
  } catch (err) {
    next(err);
  }
};

//학생 등록
module.exports.student = async (req, res, next) => {
  try {
    console.log(req.body);
    await models.student.create({
      student_id: req.body.email,
      student_pw: req.body.password,
      name: req.body.name,
    });

    res.status(200).json({ student: '학생등록' });
  } catch (err) {
    next(err);
  }
};

// 수강페이지로 과목 db receive
module.exports.sugang = async (req, res, next) => {
  try {
    const findclass = await models.classs.findAll({ attributes: ['class_name'] });

    res.status(200).json({ aa: findclass, gogo: '수강페이지로' });
  } catch (err) {
    next(err);
  }
};

// 출석체크 페이지로
module.exports.culsuk = async (req, res, next) => {
  try {
    console.log(req.body);
    const findclass = await models.sugang.findAll({
      attributes: ['class_name'],
      where: { student_id: req.body.str },
    });

    res.status(200).json({ aa: findclass, gogo: '출석체크페이지로' });
  } catch (err) {
    next(err);
  }
};

module.exports.aaclass = async (req, res, next) => {
  try {
    console.log('??');
    console.log(req.body);
    const findclass = await models.check.findAll({
      attributes: ['createdAt'],
      where: { student_id: req.body.email, class_name: req.body.class },
    });
    res.status(200).json({ aa: findclass, gogo: '과목으로' });
  } catch (err) {
    next(err);
  }
};

module.exports.pfindclass = async (req, res, next) => {
  try {
    const findclass = await models.classs.findAll({
      attributes: ['class_name'],
      where: { professor_id: req.body.str },
    });
    res.status(200).json({ aa: findclass, data: 'next' });
  } catch (err) {
    next(err);
  }
};

// 교수 student list receive
module.exports.last = async (req, res, next) => {
  console.log(req.body);
  try {
    const findclass = await models.sugang.findAll({
      attributes: ['student_id'],
      where: { class_name: req.body.class },
    });
    res.status(200).json({ aa: findclass, data: '현황' });
  } catch (err) {
    next(err);
  }
};

// 결석
module.exports.delete = async (req, res, next) => {
  console.log(req.body);
  try {
    await models.check.destroy({
      where: { student_id: req.body.student },
    });
    res.status(200).json('삭제완료');
  } catch (err) {
    next(err);
  }
};

//학부생 조회
module.exports.pstudent = async (req, res, next) => {
  try {
    const studentlist = await models.student.findAll({
      attributes: ['student_id'],
    });
    res.status(200).json({ aa: studentlist, list: 'list' });
    console.log(studentlist);
  } catch (err) {
    next(err);
  }
};

// 학생 list receive
module.exports.professorchulsuk = async (req, res, next) => {
  try {
    console.log(req.body);
    const findstudent = await models.check.findAll({
      attributes: ['studnet_id'],
      where: { class_name: req.body.class },
    });

    res.status(200).json({ aa: findstudent, gogo: '출결관리페이지로' });
  } catch (err) {
    next(err);
  }
};

// 학생 list receive
module.exports.myclprofessorstudentlistass = async (req, res, next) => {
  try {
    console.log(req.body);
    const findstudent = await models.sugang.findAll({
      attributes: ['studnet_id'],
      where: { class_name: req.body.class },
    });

    res.status(200).json({ aa: findstudent, gogo: '교수가담당과목학생목록보기' });
  } catch (err) {
    next(err);
  }
};

// student 수강과목 receive
module.exports.myclass = async (req, res, next) => {
  try {
    console.log(req.body);
    const findclass = await models.sugang.findAll({
      attributes: ['class_name'],
      where: { student_id: req.body.str },
    });

    res.status(200).json({ aa: findclass, gogo: '내가수강하는과목으로' });
  } catch (err) {
    next(err);
  }
};

//로그인
module.exports.login = async (req, res, next) => {
  try {
    const findUser = await models.student.findOne({ where: { student_id: req.body.email } });

    console.log(findUser);

    if (!findUser) {
      const findprofessor = await models.professor.findOne({
        where: { professor_id: req.body.email },
      });
      if (findprofessor.professor_pw === req.body.password) {
        res.status(200).json({ result: '교수' });
      } else {
        res.status(409).json({ result: '비밀번호 틀렸다' });
      }
    } else {
      if (findUser.student_pw === req.body.password) {
        console.log(findUser);
        res.status(200).json({ result: '로그인' });
      } else {
        res.status(409).json({ result: '비밀번호 틀렸다' });
      }
    }
  } catch (err) {
    next(err);
  }
};
