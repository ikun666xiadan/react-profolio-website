import React, { useState } from 'react'
import './index.css'
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { RiServiceFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";

function Nav() {
  const data = [
    {
      id:1,
      url:'#',
      icon:<AiFillHome />
    },
    {
      id:2,
      url:'#about',
      icon:<FaUser />
    },
    {
      id:3,
      url:'#experience',
      icon:<IoBookSharp />
    },
    {
      id:4,
      url:'#services',
      icon:<RiServiceFill />
    },
    {
      id:5,
      url:'#contact',
      icon:<MdContactPhone />
    },
  ]
  const [activeUrl,setActiveUrl] = useState('#')

  return (
    <nav>
      {data.map(item => <a className={activeUrl === item.url ? 'active' : ''} href={item.url} key={item.id} onClick={()=>setActiveUrl(item.url)}>{item.icon}</a>)}
    </nav>
  )
}

export default Nav