module.exports = (sequelize, DataTypes) => {
  const professor = sequelize.define(
    'professor',
    {
      professor_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        //unique: true
      },
      professor_pw: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    { timestamps: false },
  );

  professor.removeAttribute('id');

  return professor;
};
