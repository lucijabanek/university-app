'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    static associate (models) {
      this.belongsTo(models.student, {
        foreignKey: {
          name: 'student_id',
          field: 'student_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      models.student.hasMany(this, {
        foreignKey: {
          name: 'student_id',
          field: 'student_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });

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
  Enrollment.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    student_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'enrollment',
    tableName: 'enrollment',
    freezeTableName: true
  });
  return Enrollment;
};
