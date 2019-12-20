const Hobbits = require('./hobbits-model');
const db = require('../data/dbConfig');

describe('hobbits model', function() {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});

	describe('insert()', function() {
		it('should add new hobbit to the db', async function() {
			await Hobbits.insert({ name: 'Frodo' });
			await Hobbits.insert({ name: 'Meriadoc' });
			await Hobbits.insert({ name: 'Pip' });

			const hobbits = await db('hobbits');
			expect(hobbits).toHaveLength(3);
		});
	});
});
