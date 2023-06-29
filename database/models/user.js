'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate (models) {
      this.belongsTo(models.role, {
        foreignKey: {
          name: 'role_id',
          field: 'role_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
      models.role.hasMany(this, {
        foreignKey: {
          name: 'role_id',
          field: 'role_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      });
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  },
  {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'user',
    tableName: 'user',
    freezeTableName: true
  });
  return User;
};
