import React from "react";
import Me from "../../assets/me.png";
import "./index.css";

const data = [
  {
    id: 1,
    title: "小兔鲜商城",
    url: "https://github.com/ikun666xiadan/vue-xiaotuxian-project.git",
    img: Me,
  },
  {
    id: 2,
    title: "Protfolio Website",
    url: "https://github.com/ikun666xiadan/react-profolio-website.git",
    img: Me,
  },
  {
    id: 3,
    title: "小兔鲜商城",
    url: "https://github.com/ikun666xiadan/vue-xiaotuxian-project.git",
    img: Me,
  },
  {
    id: 4,
    title: "小兔鲜商城",
    url: "https://github.com/ikun666xiadan/vue-xiaotuxian-project.git",
    img: Me,
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container portfolio_container">
        {data.map((item) => (
          <div className="portfolio_content" key={item.id}>
            <img src={item.img} alt="" />
            <h2 className="portfolio_titile">{item.title}</h2>
            <a href={item.url} className="btn">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
