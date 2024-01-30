import React from 'react'
import "./VideoCard.css"


function VideoCard({image,title,channel,views,timestamp,channelIamge}) {
  return (
    <div className='VideoCard'>
      <img className="Videocard_thumbnail"src={image} alt=""></img>

      <div className='VideoCard_info'>
      <img className='avatar_videocard'   src={channelIamge} alt={channel}/>
      <div className='VideoCard_text'> 
      <h4>{title}</h4>
      <p>{channel}</p>
      <p>{views} • {timestamp}</p>

      </div>
      </div>
      </div>
  )
}

export default VideoCard
