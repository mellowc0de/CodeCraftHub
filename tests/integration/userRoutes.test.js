const request = require('supertest');
const app = require('../../src/app');

describe('User Routes', () => {
    it('should register a user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', password: 'password123' });
        expect(res.statusCode).toEqual(201);
    });
});