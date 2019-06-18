import React from 'react'
import {ListItem, ListItemContent, List} from 'react-mdl'
export function Contact(props) {
  return (
    <div className="contact-section col-12">
      <div className="row">
        <div className="left-side col-6">
          <h1 className="name">Md. Kamrul Hasan</h1>
          <div className="contact-image-div ">
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="problem?"/>
          </div>
          <div className="contact-details">
            <p className="col-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam at quisquam natus
              quidem, aliquid nobis? Ratione molestiae nostrum, corrupti vero numquam sit
              libero odit sed nulla at ad reiciendis alias.
            </p>
          </div>

        </div>
        <div className="right-side col-6">
          <div className="title">
            <h1>Contact</h1>
          </div>
          <div className="contact-des">
            <List>
              <ListItem className="li">
                <ListItemContent >
                  <i className="far fa-envelope"></i>
                  <h3>Kh317325@gmail.com</h3>
                </ListItemContent>
              </ListItem>
              <ListItem className="li">
                <ListItemContent >
                  <i className="fas fa-mobile-alt">
                    <h3>880-1967-385848</h3>
                  </i>
                </ListItemContent>
              </ListItem>
              <ListItem className="li">
                <ListItemContent >
                  <i className="fab fa-facebook-f"></i>
                  <h3>
                    <a href="https://www.facebook.com/profile.php?id=100006429803429">Md. Kamrul Hasan</a>
                  </h3>
                </ListItemContent>
              </ListItem>
              <ListItem className="li">
                <ListItemContent >
                  <i className="fab fa-twitter"></i>
                  <h3>
                    <a href="https://www.linkedin.com/in/kamrul-hasan-b510a4144/">Md. Kamrul Hasan</a>
                  </h3>
                </ListItemContent>
              </ListItem>
              <ListItem className="li">
                <ListItemContent >
                  <i className="fab fa-linkedin"></i>
                  <h3>
                    <a href="https://twitter.com/kamrulhasan325">Md. Kamrul Hasan</a>
                  </h3>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact
