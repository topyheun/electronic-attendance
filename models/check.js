module.exports = (sequelize, DataTypes) => {
  const check = sequelize.define(
    'check',
    {
      student_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false,
      },
      class_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    { timestamps: true },
  );

  check.removeAttribute('id');

  return check;
};
