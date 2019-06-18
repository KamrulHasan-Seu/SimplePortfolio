import React, {Component} from 'react'

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="homeImage">
          <img src="images/backboy.png" alt="pbl"/>
        </div>
        <div className="title-all">
          <div className="title-name">
            <h2>Kamrul Hasan</h2>
          </div>
          <div className="title-work">
            <h4>UI designer/Developer
            </h4>
          </div>
          <div className="social-all">
          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=100006429803429"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/kamrul-hasan-b510a4144/"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://twitter.com/kamrulhasan325"
              target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="social-links">
            <a href="http://google.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        </div>
      

      </div>
    )
  }
}

export default Home
