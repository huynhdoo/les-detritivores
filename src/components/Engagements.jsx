import React from 'react';
import Icons from './Icons';
const Engagements = ({
  environementTitle,
  environement,
  socialTitle,
  socialText,
  cooperationTitle,
  cooperationText,
}) => {
  return (
    <div className="container p-spaces">
      <div className="row">
        <div className="col-sm">
          <h1 className="orange m-text">{environementTitle}</h1>
          <div className="bg-orange rounded-circle boom">
            <Icons icon="ptt5" />
          </div>
          <p className="semi">{environement}</p>
        </div>
        <div className="col-sm">
          <h1 className="orange m-text">{socialTitle}</h1>
          <div className="bg-orange rounded-circle boom">
            <Icons icon="ptt13" />
          </div>
          <p className="semi">{socialText}</p>
        </div>
        <div className="col-sm">
          <h1 className="orange m-text">{cooperationTitle}</h1>
          <div className="bg-orange rounded-circle boom">
            <Icons icon="ptt3" />
          </div>
          <p className="semi">{cooperationText}</p>
        </div>
      </div>
    </div>
  );
};
export default Engagements;
