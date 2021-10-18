import React from 'react';
const Intro = ({ introText }) => {
  return (
    <div className="d-flex justify-content-center px-3 p-spaces">
      <p className="textHero text-wrap text-break light">{introText}</p>
    </div>
  );
};
export default Intro;
