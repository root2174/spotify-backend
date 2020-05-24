const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
	async index(req, res) {
		const users = await connection('users').select('*');

		return res.json(users);
	},

	async create(req, res) {
		const {
			email,
			username,
			password,
			dayOfBirth,
			monthOfBirth,
			yearOfBirth,
			gender,
			playlist,
		} = req.body;

		console.log(playlist);
		const id = crypto.randomBytes(4).toString('HEX');

		await connection('users').insert({
			id,
			email,
			username,
			password,
			dayOfBirth,
			monthOfBirth,
			yearOfBirth,
			gender,
			playlist,
		});

		return res.json({ id });
	},
};
