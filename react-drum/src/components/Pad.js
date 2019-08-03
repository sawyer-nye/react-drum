import React, { useState, useEffect } from 'react';

const Pad = ({ name, audioUrl }) => {
  const playPad = () => {
    const sound = new Audio(audioUrl);

    sound.play();
    console.log(`${name} playing`);

    /*
    setTimeout(() => {
      console.log('paused');
      sound.currentTime = 0;
    }, sound.duration * 100);
    */
  }

  const handleKeyDown = (e) => {
    console.log('pad', e.key, (e.key === name));
    if (e.key === name) playPad();
    // Currently only working for the pad last clicked; playPad not working for all pads
  }

  return (
    <div className='drum-pad' id={name} onKeyDown={e => handleKeyDown(e)}>
      <button onClick={playPad}>{name}</button>
    </div>
  );
}

export default Pad;