import React from "react";
import "./index.css";
import { FaCircleCheck } from "react-icons/fa6";

const data = [
  {
    id: 1,
    title: "前端开发",
    skills: [
      {
        name: "HTML",
        mastery: "熟练",
      },
      {
        name: "CSS",
        mastery: "熟练",
      },
      {
        name: "JS",
        mastery: "熟练",
      },
      {
        name: "VUE3",
        mastery: "熟练",
      },
      {
        name: "REACT",
        mastery: "熟练",
      },
      {
        name: "UNIAPP",
        mastery: "熟练",
      },
    ],
  },
  {
    id: 2,
    title: "后端开发",
    skills: [
      {
        name: "MYSQL",
        mastery: "了解",
      },
      {
        name: "NODEJS",
        mastery: "了解",
      },
      {
        name: "PYTHON",
        mastery: "了解",
      },
    ],
  },
];
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container container_experience">
        {data.map((item) => (
          <div className="experience_development" key={item.id}>
            <h3>{item.title}</h3>
            <div className="experience_content">
              {item.skills.map((skill, index) => (
                <article className="experience_details" key={index}>
                  <FaCircleCheck />
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.mastery}</small>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Experience;
