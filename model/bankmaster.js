const mongoose = require("mongoose");

const bankmasterSchema = mongoose.Schema(
    {

        bankCode: {
            type: String,
            required: [true, "Enter the bank Code"]
        },
        bankName: {
            type: String,
            required: [true, "Enter the bank Name"]
        }
    },
    {
        timestamps: true
    }

)
const BankMaster = mongoose.model('BankMaster', bankmasterSchema);

module.exports = BankMaster