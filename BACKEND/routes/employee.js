const router = require("express").Router();
const { json } = require("express");
let Employee = require("../models/empModel");

//create a new user
router.route("/add").post( (req,res) => {

    const name = req.body.name;
    const possition = req.body.possition;
    const gender = req.body.gender;

    const newEmployee = new Employee({
        name,
        possition,
        gender
    })

    //"then" use as a promiss function
    newEmployee.save().then( () => {
        res.json("new employee added successfully..");
    }).catch((err)=>{
        console.log(err);
    })

});

//read all user
router.route("/").get( (req,res) =>{

    Employee.find().then((employees)=>{
        res.json(employees)
    }).catch((err)=>{
        console.log(err);
    })

});

//using async can do multiple task at the same without any crash
//Update fuction
router.route("/update/:id").put( async (req,res)=>{

    let userId = req.params.id;

    //D structure
    const {name, possition, gender} = req.body;

    const updateEmployee = {
        name,
        possition,
        gender
    }

    const update = await Employee.findByIdAndUpdate(userId, updateEmployee).then(()=>{
        res.status(200).send({status: "Employer updated.."});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error in update Employer", error: err.message});
    })

});

//delete fuction
router.route("/delete/:id").delete(async(req,res)=>{

    let userId = req.params.id;

    await Employee.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status:"Employer deleted.."});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error in Employer deleting..", error: err.message});
    })

});

//find one user
router.route("/get/:id").get(async(req,res)=>{

    let userId = req.params.id;

    const user = await Employee.findById(userId).then((employee)=>{
        res.status(200).send({staus:"Employer fetched..", user: employee});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error in Employer fetching..", error: err.message});
    })

});

module.exports = router;
