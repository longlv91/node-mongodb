var app = require('express')();
var http = require('http').Server(app);
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

const customers = require('./routes/customerRouter');

mongoose.connect('mongodb://localhost:27017/mydb');
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/customers', customers);

http.listen(port, function(){
  console.log('listening on *:' + port);
});
