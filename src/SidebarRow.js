import React from 'react'

function SidebarRow(props) {
  return (
    <div className={`SidebarRow ${props.selected && "selected"}`}>
   <i class={props.icon}></i>
  <h1>{props.title}</h1>
    





    </div>
  )
}

export default SidebarRow
