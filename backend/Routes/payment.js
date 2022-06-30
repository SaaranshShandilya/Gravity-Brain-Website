const crypto = require('crypto');
const router = require("express").Router();
const razorpay = require('razorpay');
const mongoose  = require('mongoose')
const fs = require('fs');
const User = require('../models/Users')

mongoose.connect('mongodb://127.0.0.1:27017/gb')

 

router.post('/orders', async (req, res) => {
    try {
        const instance = new razorpay({
            key_id:process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });
        const options = {
            amount: 129900,
            currency: "INR",
            receipt : crypto.randomBytes(10).toString("hex"),

        }

        instance.orders.create(options,(error,order)=>{
            if(error){
                console.log(error);
                return res.status(500).json({message: "Something went wrong"})

            }
            return res.status(200).json({data: order})
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({message: "Internal Server error"})
    }
})

router.post('/verify', async(req, res)=>{
    try{
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body.response
        const sign = razorpay_order_id + "|" + razorpay_payment_id
        const expectedSign = crypto
        .createHmac("sha256", process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");
        if(razorpay_signature == expectedSign){
            const user = await User.create({
                fname: req.body.fname,
                lname : req.body.lname,
                emailid:req.body.email,
                phone:req.body.pnum,
                dob:req.body.dob,
                cls:req.body.cls,
                school: req.body.school,
                state:req.body.state,
                orderid:req.body.response.razorpay_order_id,
                paymentid:req.body.response.razorpay_payment_id
            })          
            return res.status(200).json({message: "Payment Successfully Verified, user created"})
            
        }
        else{
            return res.status(400).json({message: "Invalid Signature"})
        }
    }

    catch (err) {
        console.log(err)
        return res.status(500).json({message: "Internal Server error"})
    }
})

module.exports = router;
