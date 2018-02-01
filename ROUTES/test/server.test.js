const server = require('../solution/server');
describe('testcase for server', function() {
    it('should print margi', function(done) {
      const options = {
          method : 'GET',
          url : '/margi'
      };
      server.inject(options,(response) => {
          expect(response.payload).toBe('Hello margi');
          done();
      })
      });

      
    });