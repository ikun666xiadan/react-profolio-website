import React, { useRef } from "react";
import "./index.css";
import { MdOutlineMail } from "react-icons/md";
import { LiaQq } from "react-icons/lia";
import { TbBrandWechat } from "react-icons/tb";
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef()
  const sendEmail = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_avcdve8','template_aij8n4j',form.current,'zl7kcR20qzOIGqEx0')
    e.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_content">
          <article className="contact_option">
            <div className="contact_detail">
              <MdOutlineMail />
              <h5>2893620464@qq.com</h5>
            </div>
          </article>
          <article className="contact_option">
            <div className="contact_detail">
              <LiaQq />
              <h5>2893620464</h5>
            </div>
          </article>
          <article className="contact_option">
            <div className="contact_detail">
              <TbBrandWechat />
              <h5>leilei12_21</h5>
            </div>
          </article>
        </div>
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
