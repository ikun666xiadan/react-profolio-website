import React from 'react'
import './index.css'
import { MdOutlineMail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

const data = [
  {
    id: 1,
    url: "#",
    name:'Home'
  },
  {
    id: 2,
    url: "#about",
    name:'About'
  },
  {
    id: 3,
    url: "#experience",
    name:'Experience'
  },
  {
    id: 4,
    url: "#services",
    name:'Services'
  },
  {
    id: 5,
    url: "#contact",
    name:'Contact'
  },
];
function Footer() {
  const defaultValue = '#'
  return (
    <footer className='footer_container'>
      <a href={defaultValue} className='footer_title'>Y-sum</a>

      <ul className='footer_ul'>
        {data.map(item => (
          <li key={item.id}><a href={item.url} className='footer_list'>{item.name}</a></li>
        ))}
      </ul>
      <div className="footer_icons">
        <a href="https://github.com/ikun666xiadan" className='icon'><BsGithub/></a>
        <a href="mailto:2893620464@qq.com" className='icon'><MdOutlineMail/></a>
      </div>
      <div className="footer_copyright">
        <small>@Y-sum</small>
      </div>
    </footer>
  )
}

export default Footer 