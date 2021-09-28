import React from 'react';
const Image = ({ className, picture }) => {
  if (!picture) {
    return (
      <div className="box-notfound">
        <p className="notfound">Picture not found</p>
      </div>
    );
  }

  return <img className={className} src={picture} />;
};

export default Image;
