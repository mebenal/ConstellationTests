const request = require('request');

it('check if main home page is up', async done =>{
    const res =  await request.get('http://dev-constellation.citwdd.net/');

    done();
}) 