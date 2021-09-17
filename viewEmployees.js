import React, {useState, useEffect, useDebugValue} from "react";
import axios from "axios";


function ViewEmployer(){

    const[employees, setEmployees] = useState([]);

    useEffect(()=>{
        function getEmployees(){
            axios.get("http://localhost:8070/employee/").then((res)=>{
                setEmployees(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getEmployees();
    })

    return(
            <div><br></br><br></br>
            <h3 style={{textAlign:"center"}}>View Employees</h3><br></br><br></br>

            <table class="table">
                <thead class="table-dark">
                    <tr>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Employee Possition</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                    <td><input id="one" type="text" style={{margin:"5px"}}></input></td>
                    <td><input id="two" type="text" style={{margin:"5px"}}></input></td>
                    <td><input id="three" type="text" style={{margin:"5px"}}></input></td>
                    <td><input id="four" type="text" style={{margin:"5px"}}></input></td>
                    <td> <button class="btn btn-info" style={{width:"90px"}, {margin:"2px"}} size="sm" variant="primary" onClick={()=>{
                        

                        let name = document.getElementById("two").value;
                        let possition = document.getElementById("three").value.toString();
                        let gender = document.getElementById("four").value;
                        let id = document.getElementById("one").value;

                        const updateEmployee = {
                            name,
                            possition,
                            gender
                        }

                        axios.post("http://localhost:8070/employee/update/"+ {id}, updateEmployee).then(()=>{
                            alert("Updated..");

                        }).catch((err) => {
                            alert(err.message)
                        })

                    }}>Save</button></td>

                {employees.map((employee,index)=>(

                <tbody key={index}>
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{employee.name}</td>
                        <td>{employee.possition}</td>
                        <td>{employee.gender}</td>
                        <td> <button class="btn btn-warning" size="sm" variant="primary" onClick={()=>{
                            document.getElementById("two").value = employee.name;
                            document.getElementById("three").value = employee.possition;
                            document.getElementById("four").value = employee.gender;
                            document.getElementById("one").value = employee.id;
                        }}>Edit</button> 
                        | 
                        <button class="btn btn-danger" size="sm" variant="primary" onClick={()=>{
                            const sid = employee.id;

                            axios.post("http://localhost:8070/employee/delete/"+ {sid}).then(()=>{
                                alert("Deleted..");

                            }).catch((err) => {
                                alert(err.message)
                            })

                        }}>Delete</button> </td>
                    </tr>
                </tbody>
                
                )
                )}

                </table>

        </div>
    );

}

export default ViewEmployer;