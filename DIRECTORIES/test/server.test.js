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

   
      
    });