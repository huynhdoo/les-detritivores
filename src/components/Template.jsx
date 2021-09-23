import Icons from './Icons';
import React, { useEffect } from 'react';
import useSound from 'use-sound';
import links from '../sounds/sound.mp3';

export default function useKeypress(key, action) {
  useEffect(() => {
    function onKeyup(e) {
      if (e.key === key) action();
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
}
const Template = ({ children }) => {
  const [play] = useSound(links);

  useKeypress('s', () => {
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
