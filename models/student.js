module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define(
    'student',
    {
      student_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false,
      },
      student_pw: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    { timestamps: false },
  );

  student.removeAttribute('id');

  return student;
};
