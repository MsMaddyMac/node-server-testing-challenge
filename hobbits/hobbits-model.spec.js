const Hobbits = require('./hobbits-model');
const db = require('../data/dbConfig');

describe('hobbits model', function() {
  beforeEach(async () => {
    await db('hobbits').truncate();
  });

  describe('insert() & delete()', function() {
    it('should add new hobbit to the db', async function() {
      await Hobbits.insert({ name: 'Frodo' });
      await Hobbits.insert({ name: 'Meriadoc' });

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
    })

    it('should delete hobbit from the db', async function() {
      await Hobbits.delete({ id: 1 })

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(1);
    })
  })
})