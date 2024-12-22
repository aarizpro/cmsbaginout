const mongoose = require("mongoose");

const atmmasterSchema = mongoose.Schema(
    {

        atmId: {
            type: String,
            required: [true, "Enter the Atm ID"]
        },
        binId: {
            type: String,
            required: [true, "Enter the BinID"]
        },
        routeName: {
            type: String,
            required: [true, "Enter the Route Code"]
        },
        loadType: {
            type: String,
            required: [true, "Enter the loading Method"]
        }
    },
    {
        timestamps: true
    }

)
const AtmMaster = mongoose.model('AtmMaster', atmmasterSchema);

module.exports = AtmMaster
