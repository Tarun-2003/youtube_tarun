import React from 'react'
import "./SearchPage.css"
import ChannelRow from "./ChannelRow"
import VideoRow from "./VideoRow"


function SearchPage() {
  return (
    <div className='SearchPage'>


<div className='SearchPage_filter'> 
<i class="fa-sharp fa-solid fa-sliders"></i>
<h1>FILTER</h1>
</div>
<hr/>
<ChannelRow
image="https://yt3.googleusercontent.com/ytc/AL5GRJXoWnTXp_oljCbsD07kYmc6Vktj3J0Vs64ALooxgA=s176-c-k-c0x00ffffff-no-rj-mo"
description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
sub='1.4M'
verified
channel="Clever Programmer"
noofvideos={400}
/>
<hr/>
<VideoRow


views="1.4M"
sub="1.4M"
description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS 🚀.
"
timestamp="2 years ago"

channel="Clever Programmer"

title="Let's build a youtube clone "
image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
/>
<VideoRow
views="2.5M"
sub="1.4M"
description="We just created the Best Free JavaScript Programming Course on the planet 🌎
Made with lots of ❤️. "
timestamp="1 year ago"

channel="Clever Programmer"
title="JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)"
image="https://i.ytimg.com/vi/lI1ae4REbFM/maxresdefault.jpg"

/>

<VideoRow
views="246k"
sub="1.4M"
description="STOP doing this. It's so annoying. It is what is stopping 99% of you from making forward progress with your coding skills and your coding career. If you master this... You'll be so far ahead of the curve it's not even funny."
timestamp="1 year ago"

channel="Clever Programmer"
title="STOP watching tutorials. Code like this instead."
image="https://i.ytimg.com/vi/d01vkk3CYi0/maxresdefault.jpg"

/>

<VideoRow
views="340K"
sub="1.4M"
description="This video is what everyone needs to watch before they write a single piece of code."
timestamp="4 years ago"

channel="Clever Programmer"
title="How To Think And Problem Solve In Coding."
image="https://i.ytimg.com/vi/Hb9WUEXdkCE/maxresdefault.jpg"

/>











</div>
  
)
}

export default SearchPage
