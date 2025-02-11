import React, { useContext } from 'react'
import AppContext from '../context/App_Context'

const Footer = () => {
  const {theme} = useContext(AppContext)
  return (
    <footer className={`text-center fixed bottom-0  shadow-sm left-0 right-0 ${theme ? "bg-base-100 text-white" : "bg-white text-black"}`}>
        <p className='p-2'>Created By MCA Student</p>
    </footer>
  )
}

export default Footer