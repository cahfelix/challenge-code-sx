import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Profile from './components/profile/profile.js';
import Objective from './components/objective/objective.js';
import PersonalSkill from './components/personal_skill/personal_skill.js';
import ProfessionalSkill from './components/professional_skill/professional_skill.js';
import Contact from './components/contact/contact.js';
import Education from './components/education/education.js';
import Experience from './components/experience/experience.js';
import Award from './components/award/award.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
   componentDidMount() {
    const api = "http://www.mocky.io/v2/57dfec211000009020598073";
     fetch(api)
      .then(response => response.json()).then(response => {
        this.setState({
          data: [response]
        })
      })
  }

  render() {
    // const data = this.state.data.map((user, index) => {});
    // console.log(data)
    const data = this.state.data.map((response_api, index) => {
      return (
        <div className="d_b-flex">
          <div className="bg-blue-light w_b-50">
            <div className="ml_b-150 ">
              <Profile content={ response_api } />
              <Objective content={ response_api } />
              <PersonalSkill content={ response_api } />
              <Contact content={ response_api } />
            </div>
          </div>
          <div className="bg-white w_b-50">
            <div className="mr_b-150">
              <Education content={ response_api } />
              <Experience content={ response_api } />
              <ProfessionalSkill content={ response_api } />
              <Award content={ response_api }/>
            </div>
           </div>
         </div>
       );
    });

    return data;
  }
}

export default App;
