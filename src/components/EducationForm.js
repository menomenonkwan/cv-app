import React from 'react';

class EducationForm extends React.Component {
  handleChange = (e) => {
    const index = this.props.index; 
    const name = e.currentTarget.name; 
    const updatedInput = e.currentTarget.value; 
     const updatedEducation = {
      ...this.props.education, 
      [name]: updatedInput
    };
    this.props.updateEducation(updatedEducation, index);
  }
  
  render() {
    const { schoolName, degree, year, extra } = this.props.education;
    
    return (
      <form>
        <h2>Education Information</h2>
        <label>School Name:</label> 
          <input 
            type="text" 
            name="schoolName"
            value={schoolName} 
           onChange={this.handleChange}
           placeholder="Enter the school name..."
          /> 
        <label>Degree/Field of Study:</label>
        <input 
          type="text" 
          name="degree"
          value={degree} 
          onChange={this.handleChange}
          placeholder="Enter your Field of Study..."
        />
        <label>Year Graduated:</label>
          <input 
            type="text" 
            name="year"
            value={year} 
            onChange={this.handleChange}
            placeholder="Enter year of or expected year of completion..."
          />
        <label>Awards and Honors:</label>
          <input 
            type="text" 
            name="extra"
            value={extra}  
            onChange={this.handleChange}
            placeholder="Enter any awards or honors..."
          />
          <button type="submit" onClick={() => this.props.editEducation(this.props.index)}>Submit</button>            
      </form>
    );
  }
}

export default EducationForm;