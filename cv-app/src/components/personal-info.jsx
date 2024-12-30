import { useState } from 'react';
import '../styles/personal-info.css';

function PersonalInfo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <>
      <div className='resume-container'>
        <ResumeHeader
          name='Shay'
          email='shay.developer@gmail.com'
          phoneNumber='9025977880'
          address='Midgard'
        ></ResumeHeader>
        <ResumeEducation
          degree='Bachelor in Science'
          institute='University of Something'
          duration='2020 - 2024'
          city='Some City'
        ></ResumeEducation>
        <ResumeExperience
          job='Full Stack Developer'
          company='Some Company'
          duration='2024 - now'
          city='Some City'
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

function ResumeEducation({ degree, institute, duration, city }) {
  return (
    <section className='resume-education-section resume-sections'>
      <div className='education-heading resume-headings'>
        <h2>Education</h2>
      </div>
      <div className='education-details-container resume-detail-containers'>
        <h3 className='resume-degree'>{degree}</h3>
        <p className='resume-education-duration'>{duration}</p>
        <h4 className='resume-institute'>{institute}</h4>
        <p className='resume-education-city'>{city}</p>
      </div>
    </section>
  );
}

function ResumeExperience({ job, duration, company, city }) {
  return (
    <section className='resume-experience-section resume-sections'>
      <div className='experience-heading resume-headings'>
        <h2>Experience</h2>
      </div>
      <div className='experience-details-container resume-detail-containers'>
        <h3 className='resume-job'>{job}</h3>
        <p className='resume-experience-duration'>{duration}</p>
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
