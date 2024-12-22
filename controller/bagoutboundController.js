const ProfileDetails = require('../model/bagOutbound');
const asyncHandler = require('express-async-handler');

const getProfileDetails = asyncHandler(async(req,res)=>{
    try {
        const profileDetails = await ProfileDetails.find({});
        res.status(200).json(profileDetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
});


const createProfile = asyncHandler(async (req, res) => {
    try {
        const { atmId } = req.body;
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0); // Start of the day
        const todayEnd = new Date();
        todayEnd.setHours(23, 59, 59, 999); // End of the day

        // Check for duplicate records with the same atmId created today
        const duplicateRecord = await ProfileDetails.findOne({
            atmId,
            createdAt: { $gte: todayStart, $lte: todayEnd }
        });

        if (duplicateRecord) {
            res.status(400);
            throw new Error("Duplicate record: ATM ID already exists for today.");
        }

        // If no duplicate, proceed with creating the record
        const profileDetails = await ProfileDetails.create(req.body);
        res.status(201).json(profileDetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});

const getProfileDetail = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params;
        const profileDetails = await ProfileDetails.findById(id);
        res.status(200).json(profileDetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
});

const updateProfileDetail = asyncHandler(async(req,res)=>{
    try {
        const {id}= req.params;
        const profileDetails = await ProfileDetails.findByIdAndUpdate(id,req.body);
        if(!profileDetails){
            res.status(404);
            throw new Error(`Cannot Find the Details with ID${id}`);
        }
        const updatedProfile = await ProfileDetails.findById(id);
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
});

const deleteProfileDetail = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const profileDetails = await ProfileDetails.findByIdAndDelete(id);

        if (!profileDetails) {
            res.status(404);
            throw new Error(`Cannot find the details with ID ${id}`);
        }

        res.status(200).json({ message: `Profile with ID ${id} deleted successfully` });
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});


// const getProfilebyField = asyncHandler(async (req, res) => {
//     const { field, value } = req.query;
//     try {
//         if (!Array.isArray(field) || !Array.isArray(value)) {
//             res.status(400).json({ error: "Fields and values must be arrays" });
//             return;
//         }
//         const query = {};
//         field.forEach((f, index) => {
//             query[f] = value[index];
//         });
//         const users = await ProfileDetails.find(query);
//         res.json(users);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });
const getProfilebyField = asyncHandler(async (req, res) => {
    const { field, value } = req.query;
    try {
        if (!Array.isArray(field) || !Array.isArray(value)) {
            res.status(400).json({ error: "Fields and values must be arrays" });
            return;
        }

        const query = {};
        field.forEach((f, index) => {
            if (f === "createdAt") {
                // If the field is "createdAt", handle filtering by date
                const currentDate = value[index];
                query[f] = {
                    $gte: new Date(currentDate + "T00:00:00.000Z"),
                    $lte: new Date(currentDate + "T23:59:59.999Z"),
                };
            } else {
                query[f] = value[index];
            }
        });

        const users = await ProfileDetails.find(query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports={
    getProfilebyField,
    deleteProfileDetail,
    updateProfileDetail,
    getProfileDetail,
    createProfile,
    getProfileDetails
}


