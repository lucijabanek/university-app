'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    static associate (models) {
      this.belongsTo(models.department, {
        foreignKey: {
          name: 'department_id',
          field: 'department_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      models.department.hasMany(this, {
        foreignKey: {
          name: 'department_id',
          field: 'department_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      this.belongsTo(models.user, {
        foreignKey: {
          name: 'user_id',
          field: 'user_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      models.user.hasOne(this, {
        foreignKey: {
          name: 'user_id',
          field: 'user_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  Professor.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    address: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    department_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'professor',
    tableName: 'professor',
    freezeTableName: true
  });
  return Professor;
};
