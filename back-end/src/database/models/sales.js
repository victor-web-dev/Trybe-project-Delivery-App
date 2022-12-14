'use strict';
const db = require('.');

const SaleModel = (sequelize, DataTypes) => {

  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users'
        },
        key: 'id',
      },
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users'
        },
        key: 'id',
      },
      field: 'seller_id',
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false,
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'delivery_address',
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
      field: 'sale_date',
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'Pendente',
      allowNull: false,
    },
  }, {
    sequelize: db,
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.SalesProducts);
    
    Sale.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });

    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'seller',
    });
  }

  return Sale;
}

module.exports = SaleModel;
