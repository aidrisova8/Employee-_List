import { useEffect, useState } from "react";
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EmployeePage from './pages/EmployeePage'


function App() {
   
  const [users, setUsers] = useState([]);



  async function fetchEmployeeData() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2");
      const userList = await response.json();

      setUsers(userList.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchEmployeeData();
  }, []);
 

  return (
  <div className='App'>
    <Routes>
      <Route path="/" element={<HomePage users={users} />}/> 
      <Route path="/:id" element={<EmployeePage users={users}/>}/> 
    </Routes>

  </div>
  )
}

export default App
