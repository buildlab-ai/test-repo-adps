const request = require('supertest');
const app = require('../index.js');

describe('App Endpoints', () => {
  describe('GET /', () => {
    it('should return success message', async () => {
      const res = await request(app)
        .get('/')
        .expect(200);
      
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toContain('Adps AI');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const res = await request(app)
        .get('/health')
        .expect(200);
      
      expect(res.body).toHaveProperty('status', 'healthy');
    });
  });
});