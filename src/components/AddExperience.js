import React from "react";

class AddExperience extends React.Component {
  nameRef = React.createRef();
  yearStartRef = React.createRef();
  yearEndRef = React.createRef();
  descriptionRef = React.createRef();

  createExperience = (e) => {
    e.preventDefault();
    const employer = {
      name: this.nameRef.current.value,
      yearStart: this.yearStartRef.current.value,
      yearEnd: this.yearEndRef.current.value,
      description: this.descriptionRef.current.value,
      show: true,
    };
    this.props.addExperience(employer);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.createExperience}> 
        <h2>Experience Information</h2>
        <label>Employer Name:</label> 
          <input 
            type="text" 
            ref={this.nameRef}
            name="name"
            placeholder="Enter the employer name..."
          /> 
        <label>Year Start:</label>
          <input 
            type="text" 
            ref={this.yearStartRef}
            name="yearStart"
            placeholder="Enter year started..."
          />
        <label>Year End:</label>
          <input 
            type="text" 
            ref={this.yearEndRef}
            name="yearEnd"
            placeholder="Enter year ended..."
          />
        <label>Description:</label>
          <input 
            type="text" 
            ref={this.descriptionRef}
            name="description"
            placeholder="Enter description and experiences..."
          />
        <button type="submit">Submit</button>            
      </form>
    );
  }
}

export default AddExperience;
