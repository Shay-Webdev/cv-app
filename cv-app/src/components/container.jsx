import { useState } from 'react';
import '../styles/container.css';
import PersonalInfo from './personal-info.jsx';
import UserInputContainer from './user-input.jsx';

function UserInput({ handlePersonalInfoInput }) {
  return (
    <section className='user-input-container'>
      <UserInputContainer
        handlePersonalInfoInput={handlePersonalInfoInput}
      ></UserInputContainer>
    </section>
  );
}

function Resume({ personalInfoInput }) {
  return (
    <section className='resume-container'>
      <PersonalInfo personalInfoInput={personalInfoInput}></PersonalInfo>
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
    startDate: '',
    endDate: '',
    location: '',
  });

  const [experienceInput, setExperienceInput] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
  });
  function handlePersonalInfoInput(e) {
    const { name, value } = e.target;
    const updatedPersonalInfoInput = { ...personalInfoInput, fullName: value };
    setPersonalInfoInput(updatedPersonalInfoInput);
    console.log(personalInfoInput);
  }
  return (
    <div className='page-container'>
      <UserInput handlePersonalInfoInput={handlePersonalInfoInput}></UserInput>
      <Resume personalInfoInput={personalInfoInput}></Resume>
    </div>
  );
}

export default PageContainer;
