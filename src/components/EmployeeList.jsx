import EmployeeListItem from "./EmployeeListItem"

 

const EmployeeList = ({users}) => {
 

  return (
    <div className="employee-list"> 
    <EmployeeListItem users={users} />
    </div>
  )
}

export default EmployeeList