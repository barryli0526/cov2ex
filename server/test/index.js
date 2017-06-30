const request = require('koa2-request')

for (var i = 0; i < 100; i++) {
    request({ url: 'http://127.0.0.1:3001/api/latest', json: true }, function (error, response, body) {
        console.log(body.length);
    })
}


