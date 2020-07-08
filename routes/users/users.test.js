var rp = require('request-promise-native');

it('Testing to see if Dev is up', async () =>{
    
    var options = {
        uri: 'http://dev-constellation.citwdd.net',
        headers:{
        },
    };

    var errorWasCaught=false;
    var errorCaught=null;

    try{
        var response = await rp(options);
    } catch (exception){
        errorCaught=exception;
        errorWasCaught=true;
    }
    expect(errorWasCaught).toBe(false);
    done();
})

