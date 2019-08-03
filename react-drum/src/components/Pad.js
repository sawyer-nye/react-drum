import React, { useState, useEffect, useRef } from 'react';

const Pad = ({ name, audioUrl, tabIndex }) => {
  const inputRef = useRef(null);

  const playPad = () => {
    inputRef.current.currentTime = 0;
    inputRef.current.play();  
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const handleKeyDown = (e) => {
    console.log('pad', e.key, (e.key === name));
    if (e.key === name) playPad();
    // Currently only working for the pad last clicked; playPad not working for all pads
  }

  return (
    <div className='drum-pad' id={name} tabIndex={tabIndex}>
      <button onClick={playPad}>{name}</button>
      <audio ref={inputRef} src={audioUrl} id={name} />
    </div>
  );
}

export default Pad;