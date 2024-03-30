
const request = require('supertest');
const app = require('../server'); 
const db = require('../database'); 

beforeAll(async () => {
    await db.sync(); // Sync database before running tests
  },70000);
  
  afterAll(async () => {
    await db.close(); // Close database connection after running tests
  },70000);
  

// Test suite for pricing routes
describe('Pricing Routes', () => {
  it('should return 200 OK and calculate price for a valid request', async () => {
    const response = await request(app)
      .post('/')
      .send({
        zone: 'central',
        organization_id: '005',
        total_distance: 12,
        item_type: 'perishable'
      },50000);
    
      expect(response.body).toHaveProperty('total_price');

  });

  it('should return 400 Bad Request for an invalid request', async () => {
    const response = await request(app)
      .post('/')
      .send({
        // Invalid request body
      });
    
    expect(response.status).toBe(400);
  });
});

