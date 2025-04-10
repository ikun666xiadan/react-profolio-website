import React from "react";
import "./index.css";
import { CiBookmarkCheck } from "react-icons/ci";
const data = [
  {
    id: 1,
    title: "UI Design",
    content: [
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
    ],
  },
  {
    id: 2,
    title: "Web Design",
    content: [
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
    ],
  },
  {
    id: 3,
    title: "Uniapp Design",
    content: [
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
      {
        detail: "fasdiufgsf asuiftfiasg asgfuastfgeyu",
      },
    ],
  },
];
function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>services</h2>
      <div className="container services_container">
        {data.map((item) => (
          <article className="services" key={item.id}>
            <div className="services_head">
              <h3>{item.title}</h3>
            </div>

            {item.content.map((detail, index) => (
              <ul className="services_list" key={index}>
                <li className="services_li">
                  <CiBookmarkCheck className="services_icon" />
                  <p>{detail.detail}</p>
                </li>
              </ul>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
