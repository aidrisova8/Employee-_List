import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
const EmployeeListItem = ({users}) => {
  return (
    <div>
      {users.map((employee)=>{
       // console.log(employee)
     
        return(
          <div key={employee.id} className="employee-list-item">
          <div className="headshot">
            <img src={employee.avatar} />
          </div>
          <Link  to={'/'+employee.id}>
           
          
            <h3 className="name-plate">{`${employee.first_name} ${employee.last_name}`}</h3>
       
          </Link>
        </div>
        )
      })}
    
    </div>
  )
}

export default EmployeeListItem