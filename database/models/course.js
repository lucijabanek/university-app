'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate (models) {
      this.belongsTo(models.professor, {
        foreignKey: {
          name: 'professor_id',
          field: 'professor_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      models.professor.hasMany(this, {
        foreignKey: {
          name: 'professor_id',
          field: 'professor_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });

      this.belongsTo(models.major, {
        foreignKey: {
          name: 'major_id',
          field: 'major_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      models.major.hasMany(this, {
        foreignKey: {
          name: 'major_id',
          field: 'major_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  Course.init({
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
    credit_hours: DataTypes.INTEGER,
    professor_id: DataTypes.INTEGER,
    major_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'course',
    tableName: 'course',
    freezeTableName: true
  });
  return Course;
};
