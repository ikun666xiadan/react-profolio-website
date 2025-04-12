import React from "react";
import "./index.css";

const data = [
  {
    id: 1,
    title: "小兔鲜商城",
    detail:
      "该项目采用vite构建工具创建vue项目,使用pinia来存储数据,用Axios来完成http请求,采用element ui和iconfont等组件库来完善页面,由于商品图片数量庞大,因此我采用懒加载的形式来处理图片,以此来达到节约流量和减轻服务器压力的效果;并且使用git来管理代码,推送到远程仓库,最终完成项目的商品展示,商品数据渲染,登入注册功能,购物车的相关增删改查,商品的结算等功能",
  },
  {
    id: 2,
    title: "Portfilio Website",
    detail:
      "使用CRA来创建该react项目,使用reactIcon作为图标,采用emailjs使email信息能够发送到我所关联的邮箱;并且还对不同设备做出设配,使其能够在不同设备上自由切换.此项目大大提升了我的css基础以及react的开发能力",
  },
  {
    id: 3,
    title: "噜啦壁纸",
    detail:
      "此项目基于Uniapp框架开发,采用了uniapp中的大量组件库进行项目开发,最终实现了壁纸的展示,详情,分享,下载等功能;同时完成壁纸的推荐,分类以及联系客服功能",
  },
  {
    id: 4,
    title: "极客后台管理系统",
    detail:
      "使用CRA来创建该react项目,利用axios来发送网络请求和采用redux来存储数据,使用ant-design和echarts来完成业务开发,实现首页,文章的创建和管理以及用户登录功能,并且采用了localStorage来存储token",
  },
];
function ShowProject() {
  return (
    <section id="showProject">
      <h5>Look At My Project</h5>
      <h2>Project-Introduction</h2>
      <div className="showProject_container">
        {data.map((item) => (
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
