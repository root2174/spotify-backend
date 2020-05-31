exports.up = function (knex) {
	return knex.schema.createTable('songs', function (table) {
		table.string('id').primary();
		table.string('album').notNullable();
		table.string('name').notNullable();
		table.string('image').notNullable();
		table.string('duration').notNullable();
		table.string('author').notNullable();
		table.string('path').notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('songs');
};
