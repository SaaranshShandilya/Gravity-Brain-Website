const express =  require('express');
const cors  = require('cors');
const razorpay  =  require('razorpay');
const dotenv = require('dotenv');
const paymentRoutes = require('./Routes/payment');
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
    res.json({message: 'HEllo world'})
})

app.use("/api/payment/", paymentRoutes)

const port = process.env.PORT || 3000;


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})