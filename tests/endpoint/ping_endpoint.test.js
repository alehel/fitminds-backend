const createServer = require('../../server.js').createServer;
const got = require('got');
const assert = require('assert');

const port = process.env.PORT_TEST || 9373;
let server;
let testResponse;


before( async () => {
    server = createServer(port);
    testResponse = await got("http://localhost:"+port+"/v1/ping"); 
});

after(() => {
    server.close();    
});

describe('the ping endpoint',  () => {

    describe('returns a response that',  () => {     

        it('is formatted as json', (done) => {
            try{
                JSON.parse(testResponse.body);
                done();        
            }
            catch(e) {
                 done(new Error('response not valid JSON'));
            }
        });

        it('has only one attribute', () => {
            let bodyObject = JSON.parse(testResponse.body);
            assert.equal(1, Object.keys(bodyObject).length); 
        });

        it('has a parameter named uptime', () => {
            let bodyObject = JSON.parse(testResponse.body);
            assert.equal('uptime', Object.keys(bodyObject)[0]); 
        })

        it('has the "uptime" attribute containing a value of type integer', () => {
            let bodyObject = JSON.parse(testResponse.body);
            assert(Number.isInteger(bodyObject.uptime));
        })
        
    });
   
});


