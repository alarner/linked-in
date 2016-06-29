require('./Authentication');
require('./Link');
require('./WorkHistory');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		return this.hasMany('Authentication', 'userId');
	},
	links: function() {
		return this.hasMany('Link', 'userId');
	},
	workHistory: function() {
		return this.hasMany('WorkHistory', 'userId');
	}
});