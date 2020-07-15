const rp = require('request-promise-native');
const config = require('config');

it('Testing to see if Dev is up', async () =>{
    
    var options = {
        uri: config.get('constellation-url'),
        // Project
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
    expect(errorWasCaught).toBe(false);//assertion of what is expected
})

