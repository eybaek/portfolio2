import React from "react"

function Info() {
  return (
    <>
      <div className="card-container">
        {/* <span className="pro">PRO</span> */}
        <img className="round" src="https://firebasestorage.googleapis.com/v0/b/eybaek-44875.appspot.com/o/IMG_4154.webp?alt=media&token=6d17318a-ced2-4e60-b439-1725d1e8b1f1&_gl=1*6t1s01*_ga*MjAyNDMxMzAxMC4xNjk3NjM2OTU4*_ga_CW55HF8NVT*MTY5NzYzNjk1Ny4xLjEuMTY5NzYzNzMzNS4xMC4wLjA." alt="user" />
        <h3>Baek Eun young</h3>
        <h6>Seoul, South Korea</h6>
        <p>Front-end developer</p>
        {/* <div className="buttons">
          <button className="primary">
            Message
          </button>
          <button className="primary ghost">
            Following
          </button>
        </div> */}
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
          </ul>
        </div>
      </div>
      <div className="timeline">
        <ul>
          <li>
            <div className="content">
              <h3>Yanolja</h3>
              <p>야놀자 Web 서비스 개발</p>
            </div>
            <div className="time">
              <h4>2021. 10. </h4>
            </div>
          </li>
          <li>
            <div className="content">
              <h3>HUMAX Networks</h3>
              <p>Web 및 Flutter Application 개발</p>
            </div>
            <div className="time">
              <h4>2019. 12.</h4>
            </div>
          </li>
          <li>
            <div className="content">
              <h3>HUMAX</h3>
              <p>Web Application 개발 및 성능개선</p>
            </div>
            <div className="time">
              <h4>2013. 03.</h4>
            </div>
          </li>
          <li>
            <div className="content">
              <h3>Valups</h3>
              <p>Android Application 개발 및 DLNA 라이브러리 개발</p>
            </div>
            <div className="time">
              <h4>2010. 01.</h4>
            </div>
          </li>
          <div style={{clear:"both"}}></div>
        </ul>
      </div>
    </>
  )
}

export default Info