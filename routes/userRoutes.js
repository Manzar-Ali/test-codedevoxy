const express = require('express');


const user_route = express();
// using secssion

const session =require('express-session');
const config = require("../config/config");
user_route.use(session({secret:config.sessionSecret}));

const auth = require("../middleware/auth");

// set the ejs view engine

user_route.set('view engine','ejs');
user_route.set('views','./views/users');

// seting the static path
user_route.use(express.static('public'));


// use body-parser

const bodyParser=require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));


// Use of Multer
const path = require('path');
const multer=require('multer');
const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/userImages'))
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name);
    }
})

const upload = multer({storage:storage})


const userController = require('../controllers/userControllers');


user_route.get('/',userController.loadHome);
user_route.get('/home',userController.loadHome);
user_route.post('/home',userController.homeSave);
user_route.get('/about',userController.loadAbout);
user_route.get('/web-development',userController.loadWebdevelopment);
user_route.get('/blockchain',userController.loadBlockchain);
user_route.get('/stock-crypto',userController.loadStockCrypto);
user_route.get('/blogs',userController.loadBlogs);
user_route.get('/blog',userController.loadBlog);
user_route.get('/portfolios',userController.loadPortfolios);
user_route.get('/portfolio',userController.loadPortfolio);


user_route.get('/contact',userController.contactLoad);

user_route.post('/contact',userController.contactSave);

user_route.get('/newsletter',userController.newsletterLoad);

user_route.post('/newsletter',userController.newsletterSave);

user_route.get('/addBlog',userController.addBlogLoad);

user_route.post('/addBlog',upload.single('image'),userController.blogSave);


user_route.get('/navtest',userController.navTest);

user_route.get('*',function (req,res) {
    res.redirect('404');
});



module.exports=user_route;

