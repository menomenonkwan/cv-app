import React from 'react';

class GeneralForm extends React.Component {
  handleChange = (e) => {
    const name = e.currentTarget.name;
    const updatedInput = e.currentTarget.value;
    this.props.updateGeneral(updatedInput, name);
  }

  render() {
    const { firstName, lastName, phone, email } = this.props.general;

    return (
      <form className="general-form">
        <h2>General Information</h2>
        <label>First Name:</label>
          <input 
            type="text" 
            name="firstName"
            value={firstName} 
            onChange={this.handleChange}
            placeholder="Enter your first name..."
            required
          />
        <label>Last Name:</label>
          <input 
            type="text" 
            name="lastName"
            value={lastName} 
            onChange={this.handleChange}
            placeholder="Enter your last name..."
            required
          />
        <label>Phone:</label>
          <input 
            type="tel" 
            name="phone"
            value={phone} 
            onChange={this.handleChange}
            placeholder="(xxx) xxx - xxxx"
          />
        <label>Email:</label>
          <input 
            type="email" 
            name="email"
            value={email} 
            onChange={this.handleChange}
            placeholder="Enter an email..."
          />
        <button type="submit" onClick={this.props.editGeneral}>Submit</button>
        {/* <button type="submit">Submit</button> */}
      </form>
    );
  }
}

export default GeneralForm;