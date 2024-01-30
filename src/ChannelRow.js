import React from 'react'
import "./ChannelRow.css"


function ChannelRow({image,description,sub,verified,channel,noofvideos}) {
  return (
    <div className='ChannelRow'>
      <img className="ChannelRow_image" src={image} alt={channel} />
      <div className='ChannelRow_text'> 
      <h4>{channel}   {verified && <i class="fa-sharp fa-solid fa-square-check"></i>}</h4>
      <p>
      {sub} Subscribers • {noofvideos} Videos

      </p>

      <p>
      {description}
      
      </p>
      
      </div>
    </div>
  )
}

export default ChannelRow
