const server = require('../solution/server');
describe('testcase for server', function() {
    it('should get correct statuscode', function(done) {
      const options = {
          method : 'GET',
          url : '/'
      };
      server.inject(options,(response) => {
          expect(response.payload).toBe('Gur Chefhvg bs Uncv-arff');
          done();
      })
      });
    });