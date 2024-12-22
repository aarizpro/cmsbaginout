const mongoose = require("mongoose");

const baginboundSchema = mongoose.Schema(
    {

        atmId: {
            type: String,
            required: [true, "Enter the Route Code"]
        },
        binId: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        routeName: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        bagCondition: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        sealCondition: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        empDetails: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        remarks: {
            type: String,
            required: [true, "Enter the Route Name"]
        }
    },
    {
        timestamps: true
    }

)
const BagInbound = mongoose.model('BagInbound', baginboundSchema);

module.exports = BagInbound
