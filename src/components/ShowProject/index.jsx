import React from "react";
import "./index.css";

const data = [
  {
    id: 1,
    title: "小兔鲜商城",
    detail:
      "该项目采用vite构建工具创建vue项目，用vscode进行开发。该项目使用pinia来存储数据，用Axios来完成http请求，采用element ui和iconfont等组件库来完善页面，并且使用git来管理代码，推送到远程仓库。最终完成项目的商品展示，商品数据的渲染，登入注册功能，购物车的相关增删改查商品的结算等功能",
  },
  {
    id: 2,
    title: "个人简历",
    detail:
      "该项目采用vite构建工具创建vue项目，用vscode进行开发。该项目使用pinia来存储数据，用Axios来完成http请求，采用element ui和iconfont等组件库来完善页面，并且使用git来管理代码，推送到远程仓库。最终完成项目的商品展示，商品数据的渲染，登入注册功能，购物车的相关增删改查商品的结算等功能",
  },
  {
    id: 3,
    title: "小兔鲜商城",
    detail:
      "该项目采用vite构建工具创建vue项目，用vscode进行开发。该项目使用pinia来存储数据，用Axios来完成http请求，采用element ui和iconfont等组件库来完善页面，并且使用git来管理代码，推送到远程仓库。最终完成项目的商品展示，商品数据的渲染，登入注册功能，购物车的相关增删改查商品的结算等功能",
  },
];
function ShowProject() {
  return (
    <section id="showProject">
      <h5>Look At My Project</h5>
      <h2>Project-Introduction</h2>
      <div className="showProject_container">
        {data.map(item => (
          <article className="showProject_item" key={item.id}>
            <div className="showProject_content">
              <div className="showProject_title">{item.title}</div>
              <div className="project_introduction">{item.detail}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export default ShowProject;
