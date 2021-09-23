import Icons from './Icons';
import React from 'react';
import useSound from 'use-sound';
import useKeypress from 'react-use-keypress';
import playing from '../sounds/sound.mp3';

const Template = ({ children }) => {
  const [play] = useSound(playing);

  useKeypress(['s', 'altGraphKey'], () => {
    play();
  });
  return (
    <>
      <div id="start">
        <Icons icon="logo" className="logos" />
      </div>
      {children}
      <footer id="footer">
        <div className="d-flex justify-content-end">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export { Template };
