import React,{useState} from 'react'
import "./Header.css"
import {Link} from "react-router-dom"



function Header() {
  const [inputSearch, setInputSearch] = useState("")





  return (
    <div className='header-container'>

     
    <div className='header-left'>
      <i class="fa-solid fa-bars "></i>

      <Link to="/">
       <img  class="header-logo " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgwvEkAqxn_U6-3CVo11HuxfomLFEjV0K-A&usqp=CAU'    alt='youtube icon' / >
       </Link>
       </div>
       
       
       <div className='header-input'>
      <input onChange={(e)=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
      <Link to  ={`/search/ ${inputSearch}`}>
      <span className='header-input-button'><i class="fa-solid fa-magnifying-glass "></i></span>
      </Link>
      </div>
      
      <div className='header-right'>
  
      <div className='header-right-icon'><i class="fa-solid fa-video"></i></div>
      <div className='header-right-icon'><i class="fa-brands fa-figma"></i></div>
      <div className='header-right-icon'><i class="fa-solid fa-bell"></i></div>
      <div className='header-right-icon'><i class="fa-solid fa-plus"></i></div>
      </div>
    
      </div>
   








  )
}

export default Header
