import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import linkedin from "../pic/skill1.png"
import emailjs from 'emailjs-com' ;

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    emailjs.sendForm('service_wmqwver','template_y7k973u' , e.target, 'vGuqzU59vPTnACoxz')
    .then((result) => {
    alert("Message Sent , I will get back to you shortly", result.text);
    },
    (error) => {
    alert("An error occurred, Please try again", error.text);
    });
    };
  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Yousif Gbareen</h1>
                  <p>Full Stack Developer</p>
                  <p>I am highly motivated, and take care of serving high quality</p>
                  <p>Immediately available for all areas and full-time work</p> <br />
                 
                  <p>Phone: +972 0502847637</p>
                  <p>Email: yosf.98.yosf@gmail.com</p> 
                  <p>Connect with me via Call Or MESSAGE in to my account.</p>
                  <br /> 
                  <span>Or via Linkedin</span>
                  <div className='button f_flex'>
                    
                    <button className='btn_shadow'  onClick={() =>  openInNewTab('https://www.linkedin.com/in/yousif-gbareen-b69ab4201/')} >
                      <img src={linkedin} height={20} width={20} alt=''></img>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={handleSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow' type="submit" value='Send'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
