import React from 'react'
import {ProgressBar} from 'react-mdl'
const Skills = (props) => {
  return (

    <div className="skill-section">
        <div className="row">
          <div className="skill-name float-left col-4">
            {props.skill}
          </div>
          <div className="skill-progress col-8">
            <ProgressBar progress={props.progress}/>
          </div>
        </div>
      </div>
  )
}
export default Skills