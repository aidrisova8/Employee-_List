import { useState } from "react"

 

const SearchBar = ({onSearch}) => {
 
  const[input,setInput]=useState("");
 
  function handleChange(e){
setInput(e.target.value)
onSearch(e.target.value)
  }

  return (
    <div className="search-bar">
    <input value={input} onChange={handleChange} />
  </div>
  )
}

export default SearchBar