import { useState } from 'react';
import '../styles/personal-info.css';

function PersonalInfo(props) {
  console.log(props.personalInfoInput.degree);

  return (
    <>
      <div className='resume-container'>
        <ResumeHeader
          name={props.personalInfoInput.fullName}
          email={props.personalInfoInput.email}
          phoneNumber={props.personalInfoInput.phone}
          address={props.personalInfoInput.address}
        ></ResumeHeader>
        <ResumeEducation
          degree={props.educationInput.degree}
          institute={props.educationInput.school}
          startDate={props.educationInput.educationStartDate}
          endDate={props.educationInput.educationEndDate}
          city={props.educationInput.educationLocation}
        ></ResumeEducation>
        <ResumeExperience
          job={props.experienceInput.job}
          company={props.experienceInput.company}
          startDate={props.experienceInput.experienceStartDate}
          endDate={props.experienceInput.experienceEndDate}
          city={props.experienceInput.experienceLocation}
        ></ResumeExperience>
        <ResumeSkills
          skill1='HTML'
          skill2='CSS'
          skill3='JavaScript'
          skill4='React'
        ></ResumeSkills>
      </div>
    </>
  );
}

function ResumeHeader({ name, email, phoneNumber, address }) {
  return (
    <header className='personal-info-container'>
      <h1 className='personal-info-name'>{name}</h1>
      <div className='personal-info-details'>
        <div className='personal-info-email'>{email}</div>
        <div className='personal-info-phone'>{phoneNumber}</div>
        <div className='personal-info-address'>{address}</div>
      </div>
    </header>
  );
}

function ResumeEducation({ degree, institute, startDate, endDate, city }) {
  return (
    <section className='resume-education-section resume-sections'>
      <div className='education-heading resume-headings'>
        <h2>Education</h2>
      </div>
      <div className='education-details-container resume-detail-containers'>
        <h3 className='resume-degree'>{degree}</h3>
        <p className='resume-education-duration'>{`${startDate} - ${endDate}`}</p>
        <h4 className='resume-institute'>{institute}</h4>
        <p className='resume-education-city'>{city}</p>
      </div>
    </section>
  );
}

function ResumeExperience({ job, startDate, endDate, company, city }) {
  return (
    <section className='resume-experience-section resume-sections'>
      <div className='experience-heading resume-headings'>
        <h2>Experience</h2>
      </div>
      <div className='experience-details-container resume-detail-containers'>
        <h3 className='resume-job'>{job}</h3>
        <p className='resume-experience-duration'>{`${startDate} - ${endDate}`}</p>
        <h4 className='resume-company'>{company}</h4>
        <p className='resume-experience-city'>{city}</p>
      </div>
    </section>
  );
}
function ResumeSkills({ skill1, skill2, skill3, skill4 }) {
  return (
    <section className='resume-skills-section resume-sections'>
      <div className='skills-heading resume-headings'>
        <h2>Skills</h2>
      </div>
      <div className='skills-details-container resume-detail-containers'>
        <h4 className='resume-skill-1'>{skill1}</h4>
        <h4 className='resume-skill-2'>{skill2}</h4>
        <h4 className='resume-skill-3'>{skill3}</h4>
        <h4 className='resume-skill-4'>{skill4}</h4>
      </div>
    </section>
  );
}

export default PersonalInfo;
