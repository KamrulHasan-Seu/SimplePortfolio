import React from 'react'

const Education = (props) => {
  return (
    <div>
      <div className="container education">
          <div className="row ">
              <div className="education-left-side col-4 float-left">
                <h6>{props.year}</h6>
              </div>
              <div className="education-right-side col-8 float-left text-justify">
                  <h5>Institution : {props.ins}</h5>
                <h5>Group : {props.group}</h5>
                <h5>Cgpa : {props.gpa}</h5>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Education
