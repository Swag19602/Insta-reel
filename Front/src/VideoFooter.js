import React from "react";
import "./VideoFooter.css";
import Ticker from "react-ticker";
// import AlbumIcon from '@mui/icons-material/Album';
import MusicNoteIcon from "@mui/icons-material/MusicNote";
function VideoFooter({channel,description, song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h1>{channel}</h1>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
                <img className='videoFooter__record' src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Blank_CD_icon.png" alt="" />
    </div>
  );
}

export default VideoFooter;
