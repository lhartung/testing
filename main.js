var riffle = require('jsriffle');

var soap = require('soap');

var domain = riffle.Domain(process.env.DOMAIN);

riffle.setFabric(process.env.WS_URL);

riffle.setLogLevelInfo();





domain.onJoin = function() {
    this.register("echo", riffle.want(function(msg) {
        console.log("Echo: " + msg);
        return msg;
    }, String));
}

domain.join()
