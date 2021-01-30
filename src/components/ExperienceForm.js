import React from 'react';

class ExperienceForm extends React.Component {
  handleChange = (e) => {
    const index = this.props.index; 
    const name = e.currentTarget.name; 
    const updatedInput = e.currentTarget.value; 
     const updatedExperience = {
      ...this.props.experience, 
      [name]: updatedInput
    };
    this.props.updateExperience(updatedExperience, index);
  }
  
  render() {
    const { name, yearStart, yearEnd, description } = this.props.experience;

    return (
      <form>
        <h2>Experience Information</h2>
        <label>Employer:</label> 
          <input 
            type="text" 
            name="name"
            value={name} 
           onChange={this.handleChange}
           placeholder="Enter the employer name..."
          /> 
        <label>Year Start:</label>
        <input 
          type="text" 
          name="yearStart"
          value={yearStart} 
          onChange={this.handleChange}
          placeholder="Enter year started..."
        />
        <label>Year End:</label>
          <input 
            type="text" 
            name="yearEnd"
            value={yearEnd} 
            onChange={this.handleChange}
            placeholder="Enter year ended..."
          />
        <label>Description:</label>
          <input 
            type="text" 
            name="description"
            value={description}  
            onChange={this.handleChange}
            placeholder="Enter description and experiences..."
          />
          <button type="submit" onClick={() => this.props.editExperience(this.props.index)}>Submit</button>            
      </form>
    );
  }
}

export default ExperienceForm;