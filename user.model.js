let Sequelize = require("sequelize");
let path = require("path");
let env = "MySQL";
let config = require(path.join(__dirname, 'backend/config/config.json'))[env];
let sequelize = new Sequelize(config.database,config.username,config.password,config);
let bd = {};

module.exports = function(sequelize, Sequelize) {
	let User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
		nome: { type: Sequelize.STRING, notEmpty: true },
		apelido: { type: Sequelize.STRING, notEmpty: true },
		username: { type: Sequelize.TEXT },
		tipo: { type: Sequelize.TEXT },
		email: { type: Sequelize.STRING, validate: { isEmail: true } },
		password: { type: Sequelize.STRING, allowNull: false },
		sobre: { type: Sequelize.TEXT },
		last_login: { type: Sequelize.DATE },
		status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' }
	});
	return User;
}
