import React from "react";

class AddEducation extends React.Component {
  schoolNameRef = React.createRef();
  degreeRef = React.createRef();
  yearRef = React.createRef();
  extraRef = React.createRef();

  createEducation = (e) => {
    e.preventDefault();
    const school = {
      schoolName: this.schoolNameRef.current.value,
      degree: this.degreeRef.current.value,
      year: this.yearRef.current.value,
      extra: this.extraRef.current.value,
      show: true,
    };
    this.props.addEducation(school);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.createEducation}> 
        <h2>Education Information</h2>
        <label>School Name:</label> 
          <input 
            type="text" 
            ref={this.schoolNameRef}
            name="schoolName"
            placeholder="Enter the school name..."
          /> 
        <label>Degree/Field of Study:</label>
          <input 
            type="text" 
            ref={this.degreeRef}
            name="degree"
            placeholder="Enter your Field of Study..."
          />
        <label>Year Graduated:</label>
          <input 
            type="text" 
            ref={this.yearRef}
            name="year"
            placeholder="Enter year of or expected year of completion..."
          />
        <label>Awards and Honors:</label>
          <input 
            type="text" 
            ref={this.extraRef}
            name="extra"
            placeholder="Enter any awards or honors..."
          />
        <button type="submit">Submit</button>            
      </form>
    );
  }
}

export default AddEducation;
