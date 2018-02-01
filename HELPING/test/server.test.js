const server = require('../solution/solution');
describe('testcase for server', function() {
    

      it('should get correct statuscode', function(done) {
        const options = {
            method : 'GET',
            url : '/?name=margi&suffix=!'
        };
        server.inject(options,(response) => {
            expect(response.statusCode).toBe(200);
            done();
        })
        });
      
        it('should print correct  template', function(done) {
        const options = {
            method : 'GET',
            url : '/?name=margi&suffix=!'
        };
        server.inject(options,(response) => {
            expect(response.result).toBe(`<html><head><title>Hello margi!</title></head><body>Hello margi!</body></html>`);
            done();
        })
        });
    });