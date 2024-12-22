const mongoose = require("mongoose");

const mspmasterSchema = mongoose.Schema(
    {

        mspCode: {
            type: String,
            required: [true, "Enter the msp Code"]
        },
        mspName: {
            type: String,
            required: [true, "Enter the Msp Name"]
        }
    },
    {
        timestamps: true
    }

)
const MspMaster = mongoose.model('MspMaster', mspmasterSchema);

module.exports = MspMaster