module.exports = function(sequelize, Sequelize) {
	let Accuser = sequelize.define('Accuser', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
		nome: { type: Sequelize.STRING, notEmpty: true },
		email: { type: Sequelize.STRING, validate: { isEmail: true } },	
		adress: { type: Sequelize.STRING, notEmpty: true },
		password: { type: Sequelize.STRING, allowNull: false },
		telephone: { type: Sequelize.INTEGER, allowNull: true },
		status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' }
	});
	return Accuser;
}
