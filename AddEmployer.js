import React, {useState} from "react";
import axios from "axios";

function AddEmployer(){

    const [name, setName] = useState("");
    const [possition, setPossition] = useState("");
    const [gender, setGender] = useState("");

    function sendData(e){

        e.preventDefault();
        
        const newEmployee ={
            name,
            possition,
            gender
        }

        axios.post("http://localhost:8070/employee/add", newEmployee).then(()=>{
            alert("Successfully added..");

        }).catch((err) => {
            alert(err.message)
        })

    }

    return(
        <div className="container"><br></br><br></br>
            <h3 style={{textAlign:"center"}}>Add Employee</h3>
            <form onSubmit={sendData} style={{padding:"100px"}}>
                <div className="mb-3">
                    <label for="name" className="form-label">Employee Name :</label>
                    
                    <input type="text" className="form-control" id="name" placeholder="Enter Employee Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    ></input>

                </div>
                <div className="mb-3">
                    <label for="possition" className="form-label">Employee Possition :</label>

                    <input type="text" className="form-control" id="possition" placeholder="Enter Employee Possition" 
                    onChange={(e)=>{
                        setPossition(e.target.value);
                    }}>
                    </input>

                </div>
                <div className="mb-3">
                    <label for="gender" className="form-label">Employee Gender :</label>

                    <input type="text" className="form-control" id="gender" placeholder="Enter Employee Gender" 
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}>
                    </input>

                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default AddEmployer;