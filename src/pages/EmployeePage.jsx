import { useParams } from "react-router-dom"

 

const EmployeePage = ({users}) => {
  console.log(users)
 const {id} =useParams();
 console.log(id)

//  const emp = users.filter(item => item.id == id); 
 const emp=users.reduce((filteredEmp,oldEmp)=>{
  if(oldEmp.id==id){
    return oldEmp
  }
  return filteredEmp
 },null)
 console.log(emp)
  return (
    <div className="single-emp-container">     
     <h2>Employee Information</h2>
    <img src={emp.avatar} alt="face" />
    <h3>{`${emp.first_name} ${emp.last_name}`}</h3>
    <p>{emp.email}</p></div>
  )
}

export default EmployeePage