
const User = require('../models/userModel');
const Contact = require('../models/contactModel');
const Newsletter = require('../models/newsletterModel');
const Blog = require('../models/blogModel');

const bcrypt = require('bcrypt');


const nodemailer = require('nodemailer');


// Code for blog adding and displaing

const addBlogLoad = async(req,res)=>{
    try {
        res.render('addBlog')
    } catch (error) {
        console.log(error.message)
    }
}

const blogSave = async(req,res)=>{
    try {

        
       
        const blog = new Blog({
            name:req.body.name,
            description:req.body.description,
            explain:req.body.explain,
            image:req.file.filename,
                      
            
        })

        const blogData = await blog.save();

        if(blogData){

            
            

            res.render('addBlog',{message:"Your blog is added successfully. Great work bro!!"})
        }
        else{
            res.render('addBlog',{message:"Your blog is not added. Please check the error"})
        }

    } catch (error) {
        console.log(error.message);
    }
}

// home page start from here

const loadHome = async(req,res)=>{
    try {     
        res.render('home');
    } catch (error) {
        console.log(error.message)
    }
}
const homeSave = async(req,res)=>{
    try {

        // const tokenValue = "adfafafafafaf"
        // const spassword =await securePassword(req.body.password);
        const contact = new Contact({
            name:req.body.name,
            email:req.body.email,
            
            message:req.body.message
           
            
            
        })

        const contactData = await contact.save();

        if(contactData){

            
            sendContactData(req.body.name,req.body.email,req.body.message);

            res.render('home')
        }
        else{
            res.render('home')
        }

    } catch (error) {
        console.log(error.message);
    }
}
// about page start from here

const loadAbout = async(req,res)=>{
    try {     
        res.render('about');
    } catch (error) {
        console.log(error.message)
    }
}
// web-development page start from here

const loadWebdevelopment = async(req,res)=>{
    try {     
        res.render('web-development');
    } catch (error) {
        console.log(error.message)
    }
}
// blockchain page start from here

const loadBlockchain = async(req,res)=>{
    try {     
        res.render('blockchain');
    } catch (error) {
        console.log(error.message)
    }
}
// stock-crypto page start from here

const loadStockCrypto = async(req,res)=>{
    try {     
        res.render('stock-crypto');
    } catch (error) {
        console.log(error.message)
    }
}
// blogs page start from here

const loadBlogs = async(req,res)=>{
    try {     
        res.render('blogs');
    } catch (error) {
        console.log(error.message)
    }
}
// blog page start from here

const loadBlog = async(req,res)=>{
    try {     
        res.render('blog');
    } catch (error) {
        console.log(error.message)
    }
}
// Portfolios page start from here

const loadPortfolios = async(req,res)=>{
    try {     
        res.render('portfolios');
    } catch (error) {
        console.log(error.message)
    }
}
// Portfolio page start from here

const loadPortfolio = async(req,res)=>{
    try {     
        res.render('portfolio');
    } catch (error) {
        console.log(error.message)
    }
}


// Code for sending contact mail to hafiz and me

const sendContactData = async(Name,email,message)=>{
    try {
        const transporter= nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:  587  ,
            secure:false,
             requireTLS:true,
             auth:{
                user:'testdone1000@gmail.com',
                pass:'qhpypxdjoqvjbnof'
            }
    
    
        });
    
         const mailOption ={
             from:'testdone1000@gmail.com',
            to:"newlaptoppak@gmail.com",
             subject:'Client is coming!!!',
             html:'<h3>Client Name: '+Name+'</h3><h3>Email: '+email+'</h3><h3>Message: '+message+'</h3>'
        }
        
        
         transporter.sendMail(mailOption,function(error,info){
    
             try{
                            
                if(error){
                     console.log(error);                 }
              else{
                    console.log("email has been send",info.response)
                }
        }
        catch (error) {
             console.log(error.message)
                
        }
    });

    } catch (error) {
        console.log(error.message);
    }
}



// Creating contact Form functionality

const contactLoad = async (req,res)=>{
    try {
        res.render('contact');
        

    } catch (error) {
        console.log(error.message);
    }
}

const contactSave = async(req,res)=>{
    try {

        // const tokenValue = "adfafafafafaf"
        // const spassword =await securePassword(req.body.password);
        const contact = new Contact({
            name:req.body.name,
            email:req.body.email,
            
            message:req.body.message
           
            
            
        })

        const contactData = await contact.save();

        if(contactData){

            
            sendContactData(req.body.name,req.body.email,req.body.message);

            res.render('contact')
        }
        else{
            res.render('contact')
        }

    } catch (error) {
        console.log(error.message);
    }
}

// Code for newsletters 

const newsletterLoad = async (req,res)=>{
    try {
        res.render('newsletter');

    } catch (error) {
        console.log(error.message);
    }
}

const newsletterSave = async(req,res)=>{
    try {

        // const tokenValue = "adfafafafafaf"
        // const spassword =await securePassword(req.body.password);
        const newsletter = new Newsletter({
            // name:req.body.name,
            email:req.body.email,
           
           
            
            
        })

        const newsletterData = await newsletter.save();

        if(newsletterData){
            const mailData=await Newsletter.find({verify:0},{"email":1,"_id":0});
            console.log(mailData);
            
            sendContactData(req.body.name,req.body.message);

            res.render('newsletter',{message:"You are successfully added to our newsletter"})
        }
        else{
            res.render('contact',{message:"Your request is not proceed at the moment please try again later"})
        }

    } catch (error) {
        console.log(error.message);
    }
}

const navTest = async (req,res)=>{
    try {
        res.render('navtest');

    } catch (error) {
        console.log(error.message);
    }
}

module.exports={
   
    loadHome,
    homeSave,
    contactLoad,
    contactSave,
    sendContactData,
    newsletterLoad,
    newsletterSave,
    addBlogLoad,
    blogSave,
    loadAbout,
    loadWebdevelopment,
    loadBlockchain,
    loadStockCrypto,
    loadBlogs,
    loadBlog,
    loadPortfolios,
    loadPortfolio,
    navTest



}


