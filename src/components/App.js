import React from 'react';
import { General, Education, Experience } from './CVComponents';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import GeneralForm from './GeneralForm';
import AddEducation from './AddEducation';
import AddExperience from './AddExperience';
import Header from './Header';
import sample from './Sample';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        show: true,
      },
      education: {
      },
      experience: {
      },
      newEdu: false,
      newEx: false,
    }
  }

  loadSampleData = () => {
    this.setState({ 
      general: sample.general,
      education: sample.education,
      experience: sample.experience,
    });
  }

  editGeneral = (e) => {
    e.preventDefault();

    const general = { ...this.state.general };
    general.show = !general.show;
    this.setState({ general });
  }

  updateGeneral = (updatedInput, name) => {
    const general = { ...this.state.general };
    general[name] = updatedInput;
    this.setState({ general });
  };

  showEducation = () => {
    this.setState({
      newEdu: !this.state.newEdu
    });
  }

  addEducation = (school) => {
    const education = { ...this.state.education };;
    education[`school${Date.now()}`] = school;
    this.setState({ education });
    this.showEducation();
  }

  editEducation = (key) => {
    const education = { ...this.state.education };
    education[key].show = !education[key].show;
    this.setState({ education });
  }

  updateEducation = (updatedEducation, index) => {
    const education = { ...this.state.education };
    education[index] = updatedEducation;
    this.setState({ education });
  };

  showExperience = () => {
    this.setState({
      newEx: !this.state.newEx
    });
  }

  addExperience = (employer) => {
    const experience = { ...this.state.experience };;
    experience[`employer${Date.now()}`] = employer;
    this.setState({ experience });
    this.showExperience();
  }

  editExperience = (key) => {
    const experience = { ...this.state.experience };
    experience[key].show = !experience[key].show;
    this.setState({ experience });
  }

  updateExperience = (updatedExperience, index) => {
    const experience = { ...this.state.experience };
    experience[index] = updatedExperience;
    this.setState({ experience });
  };

  deleteEducation = (key) => {
    const education = { ...this.state.education };
    delete education[key];
    this.setState({ education });
  }

  deleteExperience = (key) => {
    const experience = { ...this.state.experience };
    delete experience[key];
    this.setState({ experience });
  }

  render() {
    return (
      <div className="App">
        <Header loadSampleData={this.loadSampleData}/>
        <div className="cv-form">
          {this.state.general.show ? 
            <General
              general={this.state.general}
              editGeneral={this.editGeneral}
              /> 
              : 
              <GeneralForm 
              general={this.state.general}
              updateGeneral={this.updateGeneral}
              editGeneral={this.editGeneral}
            />
          }
          <div className="info">
            <h2>Education</h2>
            <i className="fas fa-plus" onClick={this.showEducation}></i>
            {this.state.newEdu ? <AddEducation addEducation={this.addEducation}/> : null}
            {Object.keys(this.state.education).map(key => (
              (this.state.education[key].show === true) ? 
                <Education 
                  key={key}
                  index={key}
                  education={this.state.education[key]}
                  editEducation={this.editEducation}
                  deleteEducation={this.deleteEducation}
                /> 
                : 
                <EducationForm 
                  key={key}
                  index={key}
                  education={this.state.education[key]}
                  updateEducation={this.updateEducation}
                  editEducation={this.editEducation}
                />
            ))} 
          </div>
          <div className="info">
            <h2>Experience</h2>
            <i className="fas fa-plus" onClick={this.showExperience}></i>
            {this.state.newEx ? <AddExperience addExperience={this.addExperience}/> : null}
            {Object.keys(this.state.experience).map(key => (
              (this.state.experience[key].show === true) ? 
                <Experience 
                  key={key}
                  index={key}
                  experience={this.state.experience[key]}
                  editExperience={this.editExperience}
                  deleteExperience={this.deleteExperience}
                />
                :
                <ExperienceForm 
                  key={key}
                  index={key}
                  experience={this.state.experience[key]}
                  updateExperience={this.updateExperience}
                  editExperience={this.editExperience}
                />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;