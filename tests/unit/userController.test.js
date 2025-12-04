const request = require('supertest');
const app = require('../../src/app');
const User = require('../../src/models/userModel');

describe('User Controller', () => {
    it('should get user profile', async () => {
        const user = await User.create({ username: 'testuser', password: 'password123' });
        const res = await request(app)
            .get('/api/users/profile')
            .set('Authorization', `Bearer ${token}`); // Assuming token is obtained from login
        expect(res.statusCode).toEqual(200);
        expect(res.body.username).toBe(user.username);
    });
});