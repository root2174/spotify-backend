exports.up = function (knex) {
	return knex.schema.createTable('users', function (table) {
		table.string('id').primary();
		table.string('email').notNullable();
		table.string('username').notNullable();
		table.string('password').notNullable();
		table.string('dayOfBirth').notNullable();
		table.string('monthOfBirth').notNullable();
		table.string('yearOfBirth').notNullable();
		table.string('gender').notNullable();
		table.string('playlist');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('users');
};
