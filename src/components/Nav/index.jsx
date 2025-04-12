import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { RiServiceFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { debounce } from "lodash";

const data = [
  { id: 1, url: "#", icon: <AiFillHome />, sectionId: "home" },
  { id: 2, url: "#about", icon: <FaUser />, sectionId: "about" },
  { id: 3, url: "#experience", icon: <IoBookSharp />, sectionId: "experience" },
  { id: 4, url: "#services", icon: <RiServiceFill />, sectionId: "services" },
  { id: 5, url: "#contact", icon: <MdContactPhone />, sectionId: "contact" },
];

function Nav() {
  const [activeUrl, setActiveUrl] = useState("#");
  const sectionsRef = useRef([]);

  useEffect(() => {
    // 获取所有 section 元素
    sectionsRef.current = data.map((item) =>
      item.url === "#" ? null : document.querySelector(item.url)
    );

    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      let newActiveUrl = null;

      // 检测非 Home 的 section
      data.slice(1).forEach((item) => {
        const section = document.querySelector(item.url);
        if (!section) return;

        const { offsetTop, offsetHeight } = section;
        if (
          scrollPosition >= offsetTop - 100 &&
          scrollPosition < offsetTop + offsetHeight - 100
        ) {
          newActiveUrl = item.url;
        }
      });

      // 检测 Home
      if (newActiveUrl === null && scrollPosition < 100) {
        newActiveUrl = "#";
      }

      setActiveUrl((prev) => (newActiveUrl !== null ? newActiveUrl : prev));
    }, 50); // 50ms 防抖延迟

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始化检查

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeUrl]); // 依赖 activeUrl 避免闭包问题

  return (
    <nav>
      {data.map((item) => (
        <a
          className={activeUrl === item.url ? "active" : ""}
          href={item.url}
          key={item.id}
          onClick={() => setActiveUrl(item.url)}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
