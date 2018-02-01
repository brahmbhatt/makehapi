const server = require('../solution/server');
describe('testcase for server', function() {
    it('should print hello', function(done) {
      const options = {
          method : 'GET',
          url : '/'
      };
      server.inject(options,(response) => {
          expect(response.result).toBe('hello');
          done();
      })
      });

      it('should print margi', function(done) {
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