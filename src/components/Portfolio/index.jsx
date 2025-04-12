import React from "react";
import "./index.css";
import Protfolio from "../../assets/protfolio.png";
import Jike from "../../assets/jike.png";
import Wallpaper from "../../assets/wallpaper.png";
import Rabbit from "../../assets/rabbit.png";

const data = [
  {
    id: 1,
    title: "小兔鲜商城",
    url: "https://github.com/ikun666xiadan/vue-xiaotuxian-project.git",
    img: Rabbit,
  },
  {
    id: 2,
    title: "Protfolio Website",
    url: "https://github.com/ikun666xiadan/react-profolio-website.git",
    img: Protfolio,
  },
  {
    id: 3,
    title: "噜啦壁纸(小程序)",
    url: "https://github.com/ikun666xiadan/Lula-wallpaper.git",
    img: Wallpaper,
  },
  {
    id: 4,
    title: "极客后台管理系统",
    url: "https://github.com/ikun666xiadan/react-jike.git",
    img: Jike,
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
