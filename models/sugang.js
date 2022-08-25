module.exports = (sequelize, DataTypes) => {
  const sugang = sequelize.define(
    'sugang',
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
    },
    { timestamps: false },
  );

  sugang.removeAttribute('id');

  return sugang;
};
