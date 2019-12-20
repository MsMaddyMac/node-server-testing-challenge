const db = require('../data/dbConfig');
const request = require('supertest');

const server = require('../api/server');

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
			});
	});
});

describe('POST /hobbits', () => {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});

	describe('insert()', function() {
		it('should add the hobbit to the database', function() {
			return request(server)
				.post('/api/hobbits')
				.send({ name: 'Bilbo' })
				.then(res => {
					expect(res.status).toBe(201);
					expect(res.type).toMatch(/json/i);
				});
		});
	});
});

describe('DELETE /hobbits/:id', () => {
	beforeEach(async () => {
		await db('hobbits').truncate();
	});

	describe('remove()', function() {
		it('should delete the hobbit from the db', function() {
			const id = 1;

			return request(server)
				.delete(`/api/hobbits/${id}`)
				.expect(200);
		});
	});
});
