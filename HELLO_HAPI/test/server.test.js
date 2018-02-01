//const Mocha = require('mocha');
//const Chai = require('chai');
const server = require('../solution/server');
describe('#save()', function() {
    it('should save without error', function(done) {
      const options = {
          method : 'GET',
          url : '/'
      };
      server.inject(options,(response) => {
          expect(response.statusCode).toBe(200);
          done();
      })
      });
    });