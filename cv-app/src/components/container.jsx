import { useState } from 'react';
import '../styles/container.css';
import PersonalInfo from './personal-info.jsx';
import UserInputContainer from './user-input.jsx';

function UserInput({
  handlePersonalInfoInput,
  handleEducationInput,
  handleExperienceInput,
}) {
  return (
    <section className='user-input-container'>
      <UserInputContainer
        handlePersonalInfoInput={handlePersonalInfoInput}
        handleEducationInput={handleEducationInput}
        handleExperienceInput={handleExperienceInput}
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
    position: '',
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
  return (
    <div className='page-container'>
      <UserInput
        handlePersonalInfoInput={handlePersonalInfoInput}
        handleEducationInput={handleEducationInput}
        handleExperienceInput={handleExperienceInput}
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
