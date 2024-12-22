const mongoose = require("mongoose");

const cmomasterSchema = mongoose.Schema(
    {

        cmoId: {
            type: String,
            required: [true, "Enter the CMO ID"]
        },
        binid: {
            type: String,
            required: [true, "Enter the BinID"]
        },
        cmoDate: {
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
        remarks: {
            type: String,
            required: [true, "Enter the Remarks"]
        }
    },
    {
        timestamps: true
    }

)
const CmoMaster = mongoose.model('CmoMaster', cmomasterSchema);

module.exports = CmoMaster
