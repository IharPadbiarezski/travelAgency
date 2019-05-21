const Sequelize = require('sequelize');
const db = require('../config/database');

const Travels = db.define('travels', {
	title: {
		type: Sequelize.STRING
	},
	price: {
		type: Sequelize.STRING
	},
	departure_date: {
		type: Sequelize.DATE
	},
	return_date: {
		type: Sequelize.DATE
	},
	image: {
		type: Sequelize.STRING
	},
	description: {
		type: Sequelize.DATE
	},
	available: {
		type: Sequelize.DATE
	}
});

module.exports = Travels;
