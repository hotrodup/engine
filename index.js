var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/static'))

app.get('/hello', function(request, response) {
  response.send('Hello John!')
})

app.get('/goodbye', function(request, response) {
  response.send('goodbye')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
