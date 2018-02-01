const server = require('../solution/server');
describe('testcase for server', function() {
    it('should get correct statuscode', function(done) {
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