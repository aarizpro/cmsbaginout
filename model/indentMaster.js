const mongoose = require("mongoose");
const indentmasterSchema = mongoose.Schema(
    {

        atmId: {
            type: String,
            required: [true, "ATM ID is required"]
          },
        indentDate: {
            type: String,
            required: [true, "Enter the indent Id"]
        },
        fiveHund: {
            type: String,
            required: [true, "Enter the five Hundred"]
        },
        twoHund: {
            type: String,
            required: [true, "Enter the two hundred"]
        },
        oneHund: {
            type: String,
            required: [true, "Enter the one Hundred"]
        },
        indentUploadBy: {
            type: String,
            required: [true, "Enter the Uploaded By"]
        },
        indentRemarks: {
            type: String,
            required: [true, "Enter the Remarks"]
        }
    },
    {
        timestamps: true
    }

)
const IndentMaster = mongoose.model('IndentMaster', indentmasterSchema);

module.exports = IndentMaster
