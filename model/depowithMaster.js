const mongoose = require("mongoose");

const depowithSchema = mongoose.Schema(
    {

        binId: {
            type: String,
            required: [true, "Enter the Route Code"]
        },
        depowithDate: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        amount: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        type: {
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
const DepowithMaster = mongoose.model('DepowithMaster', depowithSchema);

module.exports = DepowithMaster
