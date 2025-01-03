import { useState } from 'react';
import '../styles/container.css';
import PersonalInfo from './personal-info.jsx';
import UserInputContainer from './user-input.jsx';

function UserInput({
  handlePersonalInfoInput,
  handleEducationInput,
  handleExperienceInput,
  handleClear,
  personalInfoInput,
  educationInput,
  experienceInput,
  handleExample,
  handleEducationDelete,
  handleExperienceDelete,
}) {
  return (
    <section className='user-input-container'>
      <UserInputContainer
        handlePersonalInfoInput={handlePersonalInfoInput}
        handleEducationInput={handleEducationInput}
        handleExperienceInput={handleExperienceInput}
        handleClear={handleClear}
        personalInfoInput={personalInfoInput}
        educationInput={educationInput}
        experienceInput={experienceInput}
        handleExample={handleExample}
        handleEducationDelete={handleEducationDelete}
        handleExperienceDelete={handleExperienceDelete}
      ></UserInputContainer>
    </section>
  );
}

function Resume({ personalInfoInput, educationInput, experienceInput }) {
  return (
    <section className='resume-container'>
      <PersonalInfo
        personalInfoInput={personalInfoInput}
        educationInput={educationInput}
        experienceInput={experienceInput}
      ></PersonalInfo>
    </section>
  );
}

function PageContainer() {
  const [personalInfoInput, setPersonalInfoInput] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });
  const [educationInput, setEducationInput] = useState({
    school: '',
    degree: '',
    educationStartDate: '',
    educationEndDate: '',
    educationLocation: '',
  });

  const [experienceInput, setExperienceInput] = useState({
    company: '',
    job: '',
    experienceStartDate: '',
    experienceEndDate: '',
    experienceLocation: '',
  });
  function handlePersonalInfoInput(e) {
    const { name, value } = e.target;
    const updatedPersonalInfoInput = { ...personalInfoInput, [name]: value };
    setPersonalInfoInput(updatedPersonalInfoInput);
    console.log(personalInfoInput);
  }
  function handleEducationInput(e) {
    const { name, value } = e.target;
    const updatedEducationInput = { ...educationInput, [name]: value };
    setEducationInput(updatedEducationInput);
    console.log(educationInput);
  }
  function handleExperienceInput(e) {
    const { name, value } = e.target;
    const updatedExperienceInput = { ...experienceInput, [name]: value };
    setExperienceInput(updatedExperienceInput);
    console.log(experienceInput);
  }
  function handleClear() {
    setPersonalInfoInput({
      fullName: '',
      email: '',
      phone: '',
      address: '',
    });
    setEducationInput({
      school: '',
      degree: '',
      educationStartDate: '',
      educationEndDate: '',
      educationLocation: '',
    });
    setExperienceInput({
      company: '',
      job: '',
      experienceStartDate: '',
      experienceEndDate: '',
      experienceLocation: '',
    });
  }
  function handleExample() {
    setPersonalInfoInput({
      fullName: 'Shay',
      email: 'shay.developer@gmail.com',
      phone: '9025988770',
      address: 'Midgard',
    });
    setEducationInput({
      school: 'Example University',
      degree: 'Bachelor of Science',
      educationStartDate: '2017',
      educationEndDate: '2020',
      educationLocation: 'City, State',
    });
    setExperienceInput({
      company: 'Freelancing',
      job: 'Software Developer',
      experienceStartDate: '2024',
      experienceEndDate: 'Present',
      experienceLocation: 'City, State',
    });
  }
  function handleEducationDelete() {
    setEducationInput({
      school: '',
      degree: '',
      educationStartDate: '',
      educationEndDate: '',
      educationLocation: '',
    });
  }
  function handleExperienceDelete() {
    setExperienceInput({
      company: '',
      job: '',
      experienceStartDate: '',
      experienceEndDate: '',
      experienceLocation: '',
    });
  }
  return (
    <div className='page-container'>
      <UserInput
        handlePersonalInfoInput={handlePersonalInfoInput}
        handleEducationInput={handleEducationInput}
        handleExperienceInput={handleExperienceInput}
        handleClear={handleClear}
        personalInfoInput={personalInfoInput}
        educationInput={educationInput}
        experienceInput={experienceInput}
        handleExample={handleExample}
        handleEducationDelete={handleEducationDelete}
        handleExperienceDelete={handleExperienceDelete}
      ></UserInput>
      <Resume
        personalInfoInput={personalInfoInput}
        educationInput={educationInput}
        experienceInput={experienceInput}
      ></Resume>
    </div>
  );
}

export default PageContainer;
