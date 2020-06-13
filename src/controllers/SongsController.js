const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
	async index(req, res) {
		const songs = await connection('songs').select('*');

		return res.json(songs);
	},
	async getSongByName(req, res) {
		const { name } = req.query;

		console.log(name);

		const playlist = await connection('songs')
			.select('*')
			.where('name', 'like', `%${name}%`);

		return res.json(playlist);
	},

	async getSongByAuthor(req, res) {
		const { author } = req.query;

		console.log(author);

		const playlist = await connection('songs')
			.select('*')
			.where('author', 'like', `%${author}%`);

		return res.json(playlist);
	},

	async create(req, res) {
		const { id, album, name, image, author, duration, path } = req.body;

		await connection('songs').insert({
			id,
			album,
			name,
			image,
			author,
			duration,
			path,
		});

		return res.json({ id });
	},

	async update(req, res) {
		const { id } = req.params;
		const { album, name, image, author, duration, path } = req.body;

		await connection('songs').where({ id: id }).update({
			album: album,
			name: name,
			image: image,
			author: author,
			duration: duration,
			path: path,
		});

		return res.json({ Status: 'Song updated successfully.' });
	},

	async delete(req, res) {
		const { id } = req.params;

		console.log(id);

		await connection('songs').where({ id: id }).del();

		return res.json({ id });
	},
};
