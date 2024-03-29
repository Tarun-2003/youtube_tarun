import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './VideoCard.js'

function RecommendedVideos() {
  return (
    <div className='RecommendedVideos'>
      <h1>Recommended</h1>
    
    
    <div className='RecommendedVideos_containner'>
    <VideoCard
    image="./sonnyThumbnail.jpg"

    title="How to become a web developer | 2019-2020"


    channel="Sonny Sangha"
    views="2.3M Views"

    timestamp= "3 days ago"
    channelIamge="./sonny.jpg"
    
    
    
    
    
    
    
    
    
    />
    <VideoCard
    
    image="data:image/jpeg;base64,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"
    title=" Build a TWITTER Clone with REACT JS for Beginners"
   
    
    channel="Clever Programmer"
    views="3M Views"
    timestamp="1 week ago"
    channelIamge="https://yt3.ggpht.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s88-c-k-c0x00ffffff-no-rj"
    

    
    
    
    
    
    
    
    
    
    />
    <VideoCard
    image="https://i.ytimg.com/vi/5MgBikgcWnY/maxresdefault.jpg"
    title="The first 20 hours -- how to learn anything | Josh Kaufman | TEDxCSU"
    channel="TEDx Talks"
    views="33M"
    timestamp="9 years ago"
    channelIamge="https://yt3.ggpht.com/ytc/AL5GRJUfOfVXNfonbB33lrQOb0d5R5FQVBt87N3BFp1D9Q=s88-c-k-c0x00ffffff-no-rj"

    />

    <VideoCard
    image="https://i.ytimg.com/vi/XKHEtdqhLK8/mqdefault.jpg"
    title="Python Full Course for free"
    channel="Bro Code"
    views="2.8M"
    timestamp="2 years ago"
    channelIamge="https://yt3.ggpht.com/ytc/AL5GRJXev2NIsDYSbxtF7rhC4IaUr8B6MiGw1B5plnmPug=s88-c-k-c0x00ffffff-no-rj"





    />
    <VideoCard
    image="https://i.ytimg.com/vi/muYFQiOxMjQ/maxresdefault.jpg"
    title="India's BIG Lithium Finding | Tamil News | Madan Gowri | MG"
    channel="Madan Gowri"

    views="323k"
    timestamp="6 days ago"

    channelIamge="https://yt3.ggpht.com/ytc/AL5GRJWm4_ppUTs52BSqWzeXFkRPO1KCwrv0glqrSYavliQ=s88-c-k-c0x00ffffff-no-rj"
    
    
    />
    
    
    
    
    
    
    
    
    
    
    </div>
    
    
    
    
    
    
      </div>
  )
}

export default RecommendedVideos
