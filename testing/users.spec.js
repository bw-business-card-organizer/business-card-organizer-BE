const request = require('supertest');
const server = require('../api/server');


describe('POST /api/register', () => {
  it('should post user as text/html', async () => {
    const response = await request(server).post('/api/register');

    expect(response.type).toBe('text/html');
  });
});


describe('POST /api/login', () => {
  it('should post user as JSON', async () => {
    const response = await request(server).post('/api/login');

    expect(response.type).toBe('application/json');
  });

  it('should return a status 401 when email is not found', async () => {
    let user = {
      email: 'notAtAllAnEmail!',
      password: 'mittsey'
    }
    const response = await request(server)
      .post('/api/login')
      .send(user)

    expect(response.status).toEqual(401);
  });

  it('should also return a status 401 when password does not match', async () => {
    let user = {
      email: 'kobejo@kitkat.kom',
      password: 'notThePassword!'
    }
    const response = await request(server)
      .post('/api/login')
      .send(user)

    expect(response.status).toEqual(401);
  });
  
});