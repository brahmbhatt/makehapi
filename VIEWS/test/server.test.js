const server = require('../solution/server');
describe('testcase for server', function() {
    

      it('should print margi', function(done) {
        const options = {
            method : 'GET',
            url : '/?name=margi'
        };
        server.inject(options,(response) => {
            expect(response.statusCode).toBe(200);
            done();
        })
        });
      
    });