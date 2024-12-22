const mongoose = require("mongoose");

const binmasterSchema = mongoose.Schema(
    {

        binId: {
            type: String,
            required: [true, "Enter the Route Code"]
        },
        mspName: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        bankName: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        type: {
            type: String,
            required: [true, "Enter the Route Name"]
        }
    },
    {
        timestamps: true
    }

)
const BinMaster = mongoose.model('BinMaster', binmasterSchema);

module.exports = BinMaster
