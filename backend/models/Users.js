const mongoose = require('mongoose')

const User = new mongoose.Schema({
    fname : {type: 'String', required: true},
    lname : {type: 'String', required: true},
    emailid: {type: 'String', required:true, unique:true},
    phone:{type: 'String', required:true, unique:true},
    dob:{type:'String', required:true},
    cls:{type:'String', required: true},
    school:{type: 'String', required: true},
    state:{type: 'String', required:true},
    orderid : {type: 'String', required:true},
    paymentid:{type: 'String', required:true}
}, 
    {collection:'userdata'}
)

const model = mongoose.model('UserData', User)

module.exports = model