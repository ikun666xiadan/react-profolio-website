import React from "react";
import "./index.css";
import Me from "../../assets/me.png";
import { BsFillBookFill } from "react-icons/bs";

const data = [
  {
    id: 1,
    name: "Experience",
    detail: "3+years",
    icon: <BsFillBookFill className="about_icon" />,
  },
  {
    id: 2,
    name: "Experience",
    detail: "3+years",
    icon: <BsFillBookFill className="about_icon" />,
  },
  {
    id: 3,
    name: "Experience",
    detail: "3+years",
    icon: <BsFillBookFill className="about_icon" />,
  },
];
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
            {data.map((item) => (
              <div className="about_cards" key={item.id}>
                <article className="about_card">
                  {item.icon}
                  <h5>{item.name}</h5>
                  <small>{item.detail}</small>
                </article>
              </div>
            ))}
          </div>
          <p>
            I fshdjfb ffsjf shiufsf sjbsdgsdihbiuw dhhgdsjkgbsdjg efjsbfsjfbsj
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
