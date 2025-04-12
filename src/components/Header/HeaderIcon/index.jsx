import React from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
function HeaderIcon() {
  return (
    <div className="header_icon">
      <a href="https://github.com/ikun666xiadan">
        <BsGithub />
      </a>
      <a href="/">
        <MdOutlineMail />
      </a>
    </div>
  );
}

export default HeaderIcon;
