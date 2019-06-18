import React from 'react'
import Education from './Education'
import Skills from './Skills'
export const HireMe = () => {
  return (
    <div>
      <div className="col-12 hire-section">
        <div className="row">
          <div className="col-5 hire-left-section">
            <div className="hire-left-full">
              <img src="images/user.png" alt=""/>
              <h5>Web Designer/Web Developer</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reiciendis
                vel blanditiis laudantium voluptatum accusantium numquam laboriosam culpa
                voluptate! Fugit rem deleniti dolore quam corrupti labore numquam, rerum
                repudiandae, suscipit officia sapiente, voluptatum quisquam? Eveniet fuga totam
                eaque dolorum omnis praesentium cum consectetur recusandae! Eaque, porro! Autem
                perferendis inventore quasi.</p>
            </div>
          </div>
          <div className="col-7 hire-right-section">
            <div className="education-section">
              <h2 >Education
              </h2>

              <Education
                year="2015-2019"
                gpa="3.28"
                ins="SOUTHEAST UNIVERSITY"
                group="Computer Science & Engineering"/>
              <br/>
              <Education
                year="2011-2013"
                gpa="5.00"
                ins="V.S.A.J Ansar Academy School & College"
                group="Science"/>
              <br/>
              <Education
                year="2010-2011"
                gpa="4.94"
                ins="Loskorchala High school"
                group="Science"/>
            </div>

            <div className="skill-section">
              <h2>Skill</h2>
              <Skills skill="HTML5" progress={100}/>
              <br/>
              <Skills skill="CSS3" progress={90}/>
              <br/>
              <Skills skill="BootStrap" progress={85}/>
              <br/>
              <Skills skill="React" progress={80}/>
              <br/>
              <Skills skill="Java" progress={50}/>
              <br/>
              <Skills skill="MySQL" progress={95}/>
              <br/>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireMe
