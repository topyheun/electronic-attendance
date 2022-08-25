module.exports = (sequelize, DataTypes) => {
  const classs = sequelize.define(
    'classs',
    {
      professor_id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        //unique: true
      },
      class_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    { timestamps: false },
  );
  classs.removeAttribute('id');

  return classs;
};
