const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
	async index(req, res) {
		const users = await connection('users').select('*');

		return res.json(users);
	},

	async getUserByEmail(req, res) {
		const { email } = req.query;
		console.log(email);
		const user = await connection('users')
			.select('*')
			.where({ email: email });

		return res.json(user);
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

		const playlistString = playlist.toString();

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
			playlist: playlistString,
		});

		return res.json({ id });
	},

	async update(req, res) {
		const { id } = req.params;
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

		const playlistString = JSON.stringify(playlist);

		await connection('users').where({ id: id }).update({
			email: email,
			username: username,
			password: password,
			dayOfBirth: dayOfBirth,
			monthOfBirth: monthOfBirth,
			yearOfBirth: yearOfBirth,
			gender: gender,
			playlist: playlistString,
		});

		return res.json({ Status: 'User updated successfully.' });
	},

	async delete(req, res) {
		const { id } = req.params;

		await connection('users').where({ id: id }).del();

		return res.json({ id });
	},
};
