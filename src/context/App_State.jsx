import React, { useEffect, useState } from 'react'
import AppContext from './App_Context'
import axios from 'axios'

const App_State = (props) => {
    const [material,setMaterial] = useState([])
    const [input,setInput] = useState("")
    const [selectedOption,setSelectedOption] = useState("")
    // console.log(input);
      console.log(selectedOption);
    // console.log(filtered);
    let filtered = material.filter((data)=>(
        data.subjectName.toLowerCase().includes(input.toLowerCase()) &&
        (selectedOption === "" || data.subjectName === selectedOption)
    ))


    
    
    const url = 'https://mca-doc-server.onrender.com/api/subject'
    useEffect(()=>{
        const fetchMaterials = async() =>{
            axios.get(`${url}/get`)
            .then((res)=>setMaterial(res.data.subjects))
            .catch(err => console.log(err))
        }
        fetchMaterials()
    },[])

   
    

  return (
    <AppContext.Provider value={{material,filtered,setInput,setSelectedOption}}>{props.children}</AppContext.Provider>
  )
}

export default App_State