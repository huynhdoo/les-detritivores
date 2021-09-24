import React, { useEffect } from 'react';
import Icons from './Icons';

const Trust = () => {
  const images = ['logo', 'logo', 'logo', 'logo', 'logo', 'logo'];
  const delay = 2500;
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)),
      delay
    );

    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <>
      <h1 className="orange size">ILS NOUS FONT CONFIANCE</h1>
      <div className="pb-6 d-flex justify-content-center p-cst">
        <div className="trusting bg-green">
          <div
            className="partener slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((Image, index) => (
              <Icons className="sliding" key={index} icon={Image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Trust;
