'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    static associate (models) {
      this.belongsTo(models.exam, {
        foreignKey: {
          name: 'exam_id',
          field: 'exam_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      models.exam.hasMany(this, {
        foreignKey: {
          name: 'exam_id',
          field: 'exam_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });

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
    }
  }
  Result.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    exam_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    grade: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'result',
    tableName: 'result',
    freezeTableName: true
  });
  return Result;
};
