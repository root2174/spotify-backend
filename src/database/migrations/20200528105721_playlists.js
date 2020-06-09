exports.up = function (knex) {
	return knex.schema.createTable('playlists', function (table) {
		table.string('id').primary();
		table.string('name').notNullable();
		table.string('image').notNullable();
		table.string('author').notNullable();
		table.string('duration').notNullable();
		table.string('songs').notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('playlists');
};
