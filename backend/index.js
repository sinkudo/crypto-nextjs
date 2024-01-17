var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// var db = require('./app/config/db.config.js'); // подключение настроек базы данных

// db.sequelize.sync({force: false});


app.use(express.static("files"));

app.listen(3000);

var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,
    optionSuccesStatus: 200
};
app.use(cors(corsOptions));

var user = require('./app/route/user.route.js')
user(app)

// app.get("/api/testapp", function(req, res){
//     res.status(200).send("nice");
// })

// var user = require('./app/route/user.route.js');
// user(app);
// var category = require('./app/route/category.route.js');
// category(app);
// var region = require('./app/route/region.route.js');
// region(app); 
// var auth = require('./app/route/auth.route.js');
// auth(app);
// var ad = require('./app/route/ad.route.js');
// ad(app);
// var image = require('./app/route/image.route.js');
// image(app);
// var chosen = require('./app/route/chosen.route.js');
// chosen(app);