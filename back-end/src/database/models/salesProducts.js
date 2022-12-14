'use strict';
const db = require('.');

const SalesProductsModel = (sequelize, DataTypes) => {

  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'sales'
        },
        key: 'id',
      },
      field: 'sale_id',
    },
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'products'
        },
        key: 'id',
      },
      field: 'product_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize: db,
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  SalesProducts.associate = (models) => {
    SalesProducts.belongsTo(models.Sale, {
      foreignKey: 'saleId',
      as: 'sale',
    });
    SalesProducts.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'product',
    });
    
  }

  return SalesProducts;
}

module.exports = SalesProductsModel;
 