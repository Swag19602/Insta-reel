import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
function VideoSideBar({likes,shares,messages}) {
    const[liked,setLiked]=useState(false)
  return (
    <div className="videoSidebar">
        <div className="videoSidebar__button">
            {liked?(<FavoriteIcon fontSize='large' onClick={(e)=>setLiked(false)}/>
            ):(<FavoriteBorderIcon fontSize='large' onClick={(e)=>setLiked(true)}/>)}
            
            <p>{liked?likes+1:likes}</p>
        </div>
        <div className="videoSidebar__button">
            <MessageIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className="videoSidebar__button">
            <SendIcon fontSize='large' />
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSideBar