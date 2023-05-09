import React from 'react';
import CV from '../../assets/ching_cheng_resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's chat
      </a>
    </div>
  );
};

export default CTA;
