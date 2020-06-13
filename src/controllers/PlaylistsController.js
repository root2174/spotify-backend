const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
	async index(req, res) {
		const playlists = await connection('playlists').select('*');
		console.log(playlists);
		return res.json(playlists);
	},
	async getPlaylist(req, res) {
		const { id } = req.params;
		console.log(id);
		let playlist = await connection('playlists')
			.select('*')
			.where({ id: id });

		return res.json(playlist);
	},

	async create(req, res) {
		const { id, name, image, author, duration, songs } = req.body;
		const songsString = JSON.stringify(songs);

		await connection('playlists').insert({
			id,
			name,
			image,
			author,
			duration,
			songs: songsString,
		});

		return res.json({ id });
	},

	async update(req, res) {
		const { name, image, author, duration, songs } = req.body;

		const songsString = JSON.stringify(songs);

		await connection('playlists').where({ name: name }).update({
			name: name,
			image: image,
			author: author,
			duration: duration,
			songs: songsString,
		});

		return res.json({ Status: 'Playlist updated successfully.' });
	},

	async delete(req, res) {
		const { id } = req.params;

		await connection('playlists').where({ id: id }).del();

		return res.json({ id });
	},
};
