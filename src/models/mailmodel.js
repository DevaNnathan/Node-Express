const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    OTP : {
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now(),
        // expiry: 60
        index: {expires: 60}
    }
})

const mailmodel = mongoose.model("Otp", otpSchema);

module.exports = mailmodel 