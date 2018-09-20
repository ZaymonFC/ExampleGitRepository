import app from './app'
const request = require('supertest')
const assert = require('assert')

describe('Get Product', () => {
  it('should respond with JSON', (done) => {
    request(app)
      .get('/product')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
      .expect(function(res) {
        res.body != null
        console.log(res.body)
      })
  })
})