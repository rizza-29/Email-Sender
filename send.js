const express = require("express");
const nodemailer=require("nodemailer");
const send = express();
const bodyParser = require("body-parser");


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"ar.raza5092@gmail.com",
        pass:"qtmywnxflpnddyke"
    }
});

send.use(bodyParser.json());
send.get("/email_sender/send",(req,res)=>{
    const mailOptions = {
        from:req.body.from,
        to:req.body.to,
        subject:req.body.subject,
        text:req.body.text
    }
    transporter.sendMail(mailOptions);
    res.json({  
        success:1,
        message:"Working"
    });
});

send.listen(3000, ()=>{
    console.log("Server up and running on PORT : ",3000);
});