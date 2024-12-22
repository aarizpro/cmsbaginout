require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");
const mspmaster = require("./routes/mspmasterRoute")
const bankmaster = require("./routes/bankmasterRoute")
const routemaster = require("./routes/routeMasterRoute")
const custodian = require("./routes/custodianRoute")
const atmmaster = require("./routes/atmmasterRoute")
const indentmaster = require("./routes/indentmasterRoute")
const binobmaster = require("./routes/binobmasterRoute")
const cmomaster = require("./routes/cmomasterRoute")
const depowithmaster = require("./routes/depowithmasterRoute")
const replmaster = require("./routes/replmasterRoute")
const binmaster = require("./routes/binmasterRoute")
const bagoutbound = require("./routes/bagoutbound")
const baginbound = require("./routes/baginbound")

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/mspmaster",mspmaster);
app.use("/api/bankmaster",bankmaster);
app.use("/api/routemaster",routemaster);
app.use("/api/custodian",custodian);
app.use("/api/atmmaster",atmmaster);
app.use("/api/indentmaster",indentmaster);
app.use("/api/cmomaster",cmomaster);
app.use("/api/replmaster",replmaster);
app.use("/api/binobmaster",binobmaster);
app.use("/api/depowithmaster",depowithmaster);
app.use("/api/binmaster",binmaster);
app.use("/api/bagoutbound",bagoutbound);
app.use("/api/baginbound",baginbound);



mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  app.use((err, req, res, next) => {
    console.error('Unexpected error:', err);
    res.status(500).send('Internal Server Error');
  });
  