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
        <div className="justify-content-md-end">
          <div className="row">
            <div className="col">
              <div onClick={() => play()} className="wheelchair">
                <Icons icon="assistive" />
              </div>
            </div>
            <div className="col">
              <Icons icon="logo" className="logos" />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      {children}
      <footer id="footer">
        <div className="d-flex justify-content-end footers">
          <Icons icon="logo" className="logo-footer" />
        </div>
      </footer>
    </>
  );
};
export { Template };
