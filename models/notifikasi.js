'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notifikasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Notifikasi.belongsTo(models.User,{foreignKey:'user_id'})
      Notifikasi.belongsTo(models.Product, { foreignKey: 'product_id' })
      Notifikasi.belongsTo(models.Penawaran, { foreignKey: 'penawaran_id' })
    }
  }
  Notifikasi.init({
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    penawaran_id: DataTypes.INTEGER,
    isClick: DataTypes.BOOLEAN,
    jenis_notifikasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Notifikasi',
  });
  return Notifikasi;
};