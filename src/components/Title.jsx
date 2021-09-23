import React from 'react';
const Title = ({ title, className, color }) => {
  return (
    <>
      <h1 className={className}>{title}</h1>
      <span className={`linesmall bg-${color}`} />
    </>
  );
};
export { Title };
