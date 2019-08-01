import React, { useState, useEffect } from 'react';

const Pad = ({ name, audioUrl }) => {
  const [playing, setPlaying] = useState(false);

  const sound = new Audio(audioUrl);

  const playPad = () => {
    console.log('playing:', sound.duration)
    setPlaying(true);

    setTimeout(() => {
      console.log('paused');
      setPlaying(false);
      sound.currentTime = 0;
    }, (1000 * sound.duration));
  }

  useEffect(() => {
    playing ? sound.play() : sound.pause();
  }, [playing])

  return (
    <div className='drum-pad' id={name}>
      <button onClick={playPad}>{name}</button>
    </div>
  );
}

export default Pad;