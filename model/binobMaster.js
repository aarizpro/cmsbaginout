const mongoose = require("mongoose");

const binobSchema = mongoose.Schema(
    {

        binId: {
            type: String,
            required: [true, "Enter the Route Code"]
        },
        obDate: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        amount: {
            type: String,
            required: [true, "Enter the Route Name"]
        }
    },
    {
        timestamps: true
    }

)
const BinobMaster = mongoose.model('BinobMaster', binobSchema);

module.exports = BinobMaster
