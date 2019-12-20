const db = require('../data/dbConfig');
const request = require('supertest');

const server = require('../api/server');

// describe('hobbit-router.js', function() {
// 	describe('GET /hobbits', function() {
// 		return request(server)
// 			.get('/hobbits')
// 			.then(res => {
// 				expect(res.status).toBe(200);
// 			});
// 	});
// });

describe('GET /hobbits', () => {
	it('should return data in JSON format', async () => {
    const response = await request(server).get('/api/hobbits');
		expect(response.type).toMatch(/json/i);
  });
  
  it('should return a 200 OK', function() {
    return request(server)
      .get('/api/hobbits')
      .then(res => {
        expect(res.status).toBe(200);
      })
  })
});
