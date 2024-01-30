import React from 'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow.js"
import "./SidebarRow.css"

function Sidebar() {
  return (
    <div className='Sidebar'>
      
    <SidebarRow selected
    icon="fa-solid fa-house"
     title="Home"/>
    <SidebarRow
    icon="fa-solid fa-fire"
    title="Trending"/>
    <SidebarRow
    icon="fa-brands fa-square-youtube"
    title="Subscription"/>
    <SidebarRow
    icon="fa-sharp fa-solid fa-circle-play"
    title="Playlist"/>
    <hr/>
      
      <SidebarRow 
      icon="fa-solid fa-book"
       title="Library"/>
       <SidebarRow 
       icon="fa-regular fa-clock"
        title="History"/>
        <SidebarRow 
        icon="fa-solid fa-play"
         title=" Your Videos"/>
        <SidebarRow 
        icon="fa-sharp fa-solid fa-clock"
         title="Watch Later"/>
         <SidebarRow 
         icon="fa-solid fa-thumbs-up"
          title="Liked Videos"/>
          <SidebarRow 
          icon="fa-solid fa-plus"
           title="Show More"/>
           <hr/>

      
   
   
   
   
   
   
   
   
      </div>
  )
}

 export default Sidebar
