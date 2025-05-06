import React from "react";
import CV from "../../../assets/cv.pdf"

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        下载简历
      </a>
      <a href="#contact" className="btn btn-primary">
        与我联系
      </a>
    </div>
  );
}

export default CTA;
