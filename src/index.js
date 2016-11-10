var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.get('/', function(req, res) {

    var url = req.query.username || '';

    var username = canonize(url);

    res.send(username);

}).listen(3000, () => {
    console.log('app started');
});

function canonize(url){
    var result = null;
    if(url.indexOf('p1ai') + 1){
        var pos = url.indexOf('p1ai') + 4;
        url = url.substring(pos);
        var re = new RegExp('(\/)?([a-zA-Z0-9\.]*)/?(.*)', 'i');
        result = url.match(re)[2];
    }else{
        var re = new RegExp('@?(https?:)?(\/\/)?((www\.)?(telegram|vk|vkontakte|twitter|github|medium)[^\/]*\/)?@?([-a-zA-Z0-9\._]*)/?(.*)', 'i');
        result = url.match(re)[6];
    }
    return '@' + result
}
