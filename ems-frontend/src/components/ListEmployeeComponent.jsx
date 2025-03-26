import React,{useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

export const ListEmployeeComponent = () => {
// const dummyData=[
//     {
//             "id":1,
//             "firstName":"John",
//             "lastName":"Doe",
//             "emailId":"john@gmail.com"
//     },
//     {
//             "id":2,
//             "firstName":"Alex",
//             "lastName":"Smith",
//             "emailId":"alex@gmail.com"
//     }
// ]

   const [employees,setEmployees] = useState([])

   const navigator=useNavigate();

   useEffect(()=>{
    listEmployees().then((response)=>{
        setEmployees(response.data);
    }).catch((error)=>{
        console.error(error);
   })
},[])

      function addNewEmployee(){
            navigator('/addEmployee');
      }


  return (
    <div  className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <butoon className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee</butoon>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}
