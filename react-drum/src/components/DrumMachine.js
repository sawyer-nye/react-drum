import React, { useState } from 'react';
import Pad from './Pad';

const DrumMachine = () => {
  const [sounds, setSounds] = useState([
    'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
    'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  ]);

  const names = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c'];

  return (
    <div id='drum-machine' className='centered'>
      <Pad name='q' audioUrl={sounds[0]} />
      <Pad name='w' audioUrl={sounds[1]} />
      <Pad name='e' audioUrl={sounds[2]} />
      <Pad name='a' audioUrl={sounds[3]} />
      <Pad name='s' audioUrl={sounds[4]} />
      <Pad name='d' audioUrl={sounds[5]} />
      <Pad name='z' audioUrl={sounds[6]} />
      <Pad name='x' audioUrl={sounds[7]} />
      <Pad name='c' audioUrl={sounds[8]} />
    </div>
  );
}

export default DrumMachine;