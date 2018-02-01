const server = require('../solution/server');
describe('testcase for server', function() {
    it('should print the correct file content', function(done) {
      const options = {
          method : 'GET',
          url : '/foo/bar/baz/flie.html'
      };
      server.inject(options,(response) => {
          expect(response.result).toBe('i am happy with hapi.');
          done();
      })
      });

      it('should sends the correct statuscode', function(done) {
        const options = {
            method : 'GET',
            url : '/foo/bar/baz/flie.html'
        };
        server.inject(options,(response) => {
            expect(response.statusCode).toBe(200);
            done();
        })
        });
   
      
    });