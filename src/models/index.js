const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(module.filename);

const config = require("../../config/config.js")

const db = {};

const sequelize = new Sequelize(
	config.database,
	config.user,
	config.password,
	config
);

// read sync files
fs
	.readdirSync(__dirname)
	.filter(
		file =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach(file => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
		db[model.name] = model;
	});

//associate
Object.keys(db).forEach(modelName => {
	console.log(modelName)
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
