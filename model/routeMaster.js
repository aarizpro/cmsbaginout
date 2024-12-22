const mongoose = require("mongoose");

const routemasterSchema = mongoose.Schema(
    {

        routeCode: {
            type: String,
            required: [true, "Enter the Route Code"]
        },
        routeName: {
            type: String,
            required: [true, "Enter the Route Name"]
        }
    },
    {
        timestamps: true
    }

)
const RouteMaster = mongoose.model('RouteMaster', routemasterSchema);

module.exports = RouteMaster
