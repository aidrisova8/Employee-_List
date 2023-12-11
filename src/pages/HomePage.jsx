
import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const HomePage = ({users}) => {
  const[filteredEmp,setFilteredEmp]=useState(users)

  function handleSearch(input){
    const filteredList=users.filter((emp)=>{
     let fullName=`${emp.first_name} ${emp.last_name}`;
     return  fullName.toLowerCase().includes(input.toLowerCase())
    })
    setFilteredEmp(filteredList)
   }


  return (
    <div className="container home-page">
      <Header />
      <SearchBar  onSearch={handleSearch} />
     <EmployeeList users={filteredEmp} />
    
      
    </div>
  );
};

export default HomePage;
