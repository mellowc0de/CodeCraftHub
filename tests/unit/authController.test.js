const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/userModel');

describe('Auth Controller', () => {
    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({ username: 'testuser', password: 'password123' });
        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toBe('User registered successfully');
    });

    it('should login user', async () => {
        await User.create({ username: 'testuser', password: 'password123' });
        const res = await request(app)
            .post('/api/users/login')
            .send({ username: 'testuser', password: 'password123' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});