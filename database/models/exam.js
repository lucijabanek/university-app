'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    static associate (models) {
      this.belongsTo(models.course, {
        foreignKey: {
          name: 'course_id',
          field: 'course_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      models.course.hasMany(this, {
        foreignKey: {
          name: 'course_id',
          field: 'course_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  Exam.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    date_time: DataTypes.DATE,
    course_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'exam',
    tableName: 'exam',
    freezeTableName: true
  });
  return Exam;
};
