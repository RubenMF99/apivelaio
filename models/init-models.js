var DataTypes = require("sequelize").DataTypes;
var _peticion = require("./peticion");
var _user = require("./user");

function initModels(sequelize) {
  var peticion = _peticion(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  peticion.belongsTo(user, { as: "user_iduser_user", foreignKey: "user_iduser"});
  user.hasMany(peticion, { as: "peticions", foreignKey: "user_iduser"});

  return {
    peticion,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
