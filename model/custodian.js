const mongoose = require("mongoose");

const custodianSchema = mongoose.Schema(
    {

        empId: {
            type: String,
            required: [true, "Enter the Route Code"]
        },
        empName: {
            type: String,
            required: [true, "Enter the Route Name"]
        },
        empMobile: {
            type: String,
            required: [true, "Enter the Route Name"]
        }
    },
    {
        timestamps: true
    }

)
const CustodianMaster = mongoose.model('CustodianMaster', custodianSchema);

module.exports = CustodianMaster
