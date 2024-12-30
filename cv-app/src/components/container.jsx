import { useState } from 'react';
import '../styles/container.css';
import PersonalInfo from './personal-info.jsx';
import UserInputContainer from './user-input.jsx';

function UserInput() {
  return (
    <section className='user-input-container'>
      <UserInputContainer></UserInputContainer>
    </section>
  );
}

function Resume() {
  return (
    <section className='resume-container'>
      <PersonalInfo></PersonalInfo>
    </section>
  );
}

export { UserInput, Resume };
