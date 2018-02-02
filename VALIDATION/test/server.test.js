const server = require('../solution/server.js')

describe('Validation',()=>{
   test('Should return right status code',(done)=>{
       const options = {
           method:'GET',
           url : '/chickens/breed'
       }
       server.inject(options,(response)=>{
           expect(response.statusCode).toBe(200);
           done();
       })
     
   })
   

});