import React from "react"
import "./Home.css"
import CV from "../pic/yousifGbareen.pdf"
import hero from "../pic/hero.png"
import { Typewriter } from "react-simple-typewriter"
import linkedin from "../pic/skill1.png"

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Yousif Gbareen</span>
            </h1>
            <h1>
              and looking for a job as :
              <span>
                <Typewriter words={[ " Full stack Developer."," Backend Developer."," QA Engineer."," Frontend Developer."," java Developer."]} loop cursor cursorStyle='|' typeSpeed={90} deleteSpeed={50} delaySpeed={1000} />
              </span>
              
            </h1>

            <p>Outstanding Software Practical Engineer, graduate of ORT Braude College of Engineering and professionally talented in the field of full stack development at a leading high-tech company </p>
            <br/>
            <br/>
            <div className="button">
                    <a href={CV} download="yousifGbareen.pdf"><button className='btn_shadow' >Download CV <i className='fa fa-long-arrow-right'></i></button></a>
                    
                    <a href="#contact" style={{  marginLeft: '30px' }}><button className='btn_shadow'  >Contact me <i className='fa fa-long-arrow-right'></i></button></a>
              </div> 
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME WITH</h4>
                <div className='button'>
                 
                  <button className='btn_shadow' onClick={() =>  openInNewTab('https://www.linkedin.com/in/yousif-gbareen-b69ab4201/')}>
                    <img src={linkedin} alt='' />
                  </button>
                </div>
              </div>
            </div>
            
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
