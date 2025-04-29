import React from "react";
import "./index.css";

const data = [
  {
    id: 1,
    title: "小兔鲜商城",
    detail:
      "该项目通过vite脚手架创建,进行组件化开发,最终完成了商品展示,商品详情,购物车增删改查功能以及用户登录和token校验等功能模块, 实现商品图片懒加载，首屏加载时间减少30%.其中用到vue-router管理页面路由,通过Pinia 状态管理优化全局数据流, 按需引入Element Plus组件库，打包体积减少35%，提升生产环境性能"
  },
  {
    id: 2,
    title: "Portfilio Website",
    detail:
      "通过cra命令创建react项目,该项目更多是css的表现,如准备一个公共css文件,来初始化一些常用的标签,并且做了移动端的适配.使用react-icons按需引入到项目中,利用emailjs实现表单信息能够发送到我的邮箱"
  },
  {
    id:3,
    title:"通用后台管理系统",
    detail:"使用cra命令创建react项目,进行组件化开发.实现用户管理和商品管理的增删改查功能.其中利用json-server启动mock服务,提供假数据,实现发起虚拟网络请求,利用redux管理公共数据模块,减少冗余代码,react-router管理页面路由并对路由进行懒加载处理, 使用ECharts 可视化展示数据,按需引入ant-design组件库,减少打包体积."
  },
  {
    id: 4,
    title: "噜啦壁纸",
    detail:
      "该项目使用uniapp框架加vue3进行组件化开发,实现壁纸推荐,分类和详情的模块和壁纸收藏,点赞,评分功能,对壁纸图片懒加载处理,以及集成微信分享与客服系统."
  },
  {
    id: 5,
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
