const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,
    err => {
        if(err) throw err;
        console.log('connected to MongoDB!!');
    });

app.listen(PORT, () => {
    console.log('port no : ' + PORT );
});

const employeeRoutes = require("./routes/employee.js");

// when the url call "student" this automatically navigate to "studentRoutes" folder
app.use("/employee", employeeRoutes);