
import React from 'react';


const General = (props) => {
  return (
    <div className="general">
      <h2>{props.general.firstName || 'First Name'}</h2>
      <h2>{props.general.lastName || 'Last Name'}</h2>
      <h3>{props.general.phone || 'Phone Number'}</h3>
      <h3>{props.general.email || 'Email Address'}</h3>
      <i className="fas fa-edit" onClick={props.editGeneral}></i>
    </div>
  );
}

const Education = (props) => {
  const { schoolName, year, degree, extra } = props.education;
  
  return (
    <div className="item">
      <h3>{schoolName}</h3>
      <p>{year} <span>-</span> {degree}</p>
      <h4>ACHIEVEMENTS &#38; HONORS</h4>
      <p>{extra}</p>
      <i className="fas fa-minus-circle" onClick={() => props.deleteEducation(props.index)}></i>
      <i className="fas fa-edit edit" onClick={() => props.editEducation(props.index)}></i>
    </div>
  );
}

const Experience = (props) => {
  const { name, yearStart, yearEnd, description } = props.experience;
  
  return (
    <div className="item">
      <h3>{name}</h3>
      <p>{yearStart} <span> to </span>{yearEnd ? yearEnd : 'present'}</p>
      <h4>Description</h4>
      <p>{description}</p>
      <i className="fas fa-minus-circle" onClick={() => props.deleteExperience(props.index)}></i>
      <i className="fas fa-edit edit" onClick={() => props.editExperience(props.index)}></i>
    </div>
  );
}

export { General, Education, Experience };