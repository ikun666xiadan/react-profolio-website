import React from "react";
import "./index.css";
import Me from "../../assets/me.png";
import { BsFillBookFill } from "react-icons/bs";

function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <img src={Me} alt="" />
        </div>
        <div className="about_content">
          <div className="about_items">
            <div className="about_cards">
              <article className="about_card">
                <BsFillBookFill className="about_icon" />
                <h5>Experience</h5>
                <small>3+year3</small>
              </article>
            </div>
            <div className="about_cards">
              <article className="about_card">
                <BsFillBookFill className="about_icon" />
                <h5>Experience</h5>
                <small>3+year3</small>
              </article>
            </div>
            <div className="about_cards">
              <article className="about_card">
                <BsFillBookFill className="about_icon" />
                <h5>Experience</h5>
                <small>3+year3</small>
              </article>
            </div>
          </div>
          <p>
            I fshdjfb ffsjf shiufsf sjbsdgsdihbiuw dhhgdsjkgbsdjg efjsbfsjfbsj
          </p>
          <div className="btn">Let's Talk</div>
        </div>
      </div>
    </section>
  );
}

export default About;
