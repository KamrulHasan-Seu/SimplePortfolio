import React, {Component} from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import Project from './Project'
export class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      key: 'home'
    }
  }
  toggleSection() {
    if (this.state.key === "home") {
      return (
        <div className="project-section">
          <Project
            className="project"
            name="Blog"
            details="Anyone can see some simple blog news"/>
          <Project
            className="project"
            name="Prayer Time"
            details="Anyone can see his Prayer Times"
            giturl="https://github.com/KamrulHasan-Seu/PrayerTime"/>
          
          <Project
            className="project"
            name="TODO List"
            details="Anyone can customize his todo's"/>
            <Project
            className="project"
            name="Weather App"
            details="Anyone can see Current day weather"
            giturl="https://github.com/KamrulHasan-Seu/SimpleWeatheApp"/>
            <Project
            className="project"
            name="Meme generator"
            details="Anyone can create easily a meme"
            giturl="https://github.com/KamrulHasan-Seu/MemeGenerator"/>
        </div>
      )
    } else if (this.state.key === "webDesign") {
      return (
        <h1>This is WEB DESIGN</h1>
      )
    } else if (this.state.key === "webDevelop") {
      return (
        <h1>This is WEB DEVELOP</h1>
      )
    }
  }
  render() {
    return (
      <div className="categoryTabs">
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={(key) => {
          this.setState({key})
        }}>
          <Tab eventKey="home" title="REACT"></Tab>
          <Tab eventKey="webDesign" title="WEB DESIGN"></Tab>
          <Tab eventKey="webDevelop" title="WEB DEVELOPMENT"></Tab>
        </Tabs>

        <section className="projectsSection">
          {this.toggleSection()}
        </section>
      </div>
    )
  }
}

export default Projects
