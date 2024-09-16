import { Video } from './Video';
import './App.css';
import mahebooba from './video/mahebooba.mp4'
import kiara from './video/kiara.mp4'
// import kgf from './video/WhatsApp Video 2022-04-21 at 11.05.56 AM.mp4';
import kgf2 from './video/WhatsApp Video 2022-04-28 at 1.10.55 AM.mp4'
// import { useEffect, useState } from 'react';
// import myvideo from './video/WhatsApp Video 2022-04-21 at 11.05.56 AM.mp4'
function App() {

  return (
   <div className='app'>
    <div className="app__videos">
    {/* <Video url={myvideo}/>
    {videos.map(({url,channel,description,song,likes,messages,shares})=>(<Video
    url={url}
    channel={channel}
    song={song}
    likes={likes}
    messages={messages}
    description={description}
    shares={shares}
    />))} */}
    <Video url={mahebooba} channel='kgf' description='KGF 2 romantic song #trending' song='Mahebooba' likes={124} messages={345} shares={5432}/>
    <Video url={kiara} channel='kiara' description='kiara and sushant' song='Khuda jane'likes={134} messages={35} shares={542}/>
    <Video url={kgf2} channel='kgf' description='KGF 2 SULTAN SONG #trending' song='DHEERA DHEERA'likes={1234} messages={345} shares={432}/>
   

    </div>
    {/* video */}
    {/* video */}
    {/* video */}
    {/* video */}
    {/* video */}
    {/* video */}
   </div>
  );
}

export default App;
