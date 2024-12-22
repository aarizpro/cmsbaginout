const mongoose = require("mongoose");

const replmasterSchema = mongoose.Schema(
    {

        atmId: {
            type: String,
            required: [true, "Enter the ATM ID"]
        },
        binid: {
            type: String,
            required: [true, "Enter the BinID"]
        },
        replDate: {
            type: String,
            required: [true, "Enter the CMO Date"]
        },
        empid: {
            type: String,
            required: [true, "Enter the Employee ID"]
        },
        type: {
            type: String,
            required: [true, "Enter the Type"]
        },
        fiveHun: {
            type: String,
            required: [true, "Enter the five Hundred"]
        },
        twoHun: {
            type: String,
            required: [true, "Enter the Two Hundred"]
        },
        oneHun: {
            type: String,
            required: [true, "Enter the One Hundred"]
        },
        othHun: {
            type: String,
            required: [true, "Enter the Other Hundred"]
        },
        
        fiveSeal: {
            type: String,
            required: [true, "Enter the five Hundred"]
        },
        twoSeal: {
            type: String,
            required: [true, "Enter the Two Hundred"]
        },
        oneSeal: {
            type: String,
            required: [true, "Enter the One Hundred"]
        },
        othSeal: {
            type: String,
            required: [true, "Enter the Other Hundred"]
        },
        remarks: {
            type: String,
            required: [true, "Enter the Remarks"]
        },
        bagSeal: {
            type: String,
            required: [true, "Enter the Other Hundred"]
        }
    },
    {
        timestamps: true
    }

)
const ReplMaster = mongoose.model('ReplMaster', replmasterSchema);

module.exports = ReplMaster
