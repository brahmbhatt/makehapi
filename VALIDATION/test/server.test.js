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
   test('Should return right response',(done)=>{
    const options = {
        method:'GET',
        url : '/chickens/breed'
    }
    server.inject(options,(response)=>{
        expect(response.result).toMatch('You asked for the chicken breed');
        done();
    })
  
    })

    test('Invalid Request',(done)=>{
        const options = {
            method:'GET',
            url : '/chickens'
        }
        server.inject(options,(response)=>{
            expect(response.statusCode).toBe(404);
            done();
        })
      
    })
    

});