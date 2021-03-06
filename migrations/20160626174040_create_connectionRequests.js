exports.up = function(knex, Promise) {
	return knex.schema.createTable('connectionRequests', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		// 0: Pending
		// 1: Accepted
		// -1: Rejected
		t.integer('status').notNull().defaultTo(0);

		t.integer('initiatorId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');

		t.integer('responderId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('connectionRequests');
};
