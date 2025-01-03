import '../styles/user-input.css';

function UserInputContainer({
  handlePersonalInfoInput,
  handleEducationInput,
  handleExperienceInput,
  handleClear = () => console.log('Clear button clicked'),
  personalInfoInput,
  educationInput,
  experienceInput,
  handleExample,
  handleEducationDelete,
  handleExperienceDelete,
}) {
  return (
    <>
      <div className='input-top'>
        <button type='button' onClick={() => handleClear()}>
          Clear
        </button>
        <button type='button' onClick={() => handleExample()}>
          Example
        </button>
      </div>
      <PersonalDetailsInput
        handlePersonalInfoInput={handlePersonalInfoInput}
        personalInfoInput={personalInfoInput}
      />
      <EducationInput
        handleEducationInput={handleEducationInput}
        educationInput={educationInput}
        handleEducationDelete={handleEducationDelete}
      />
      <ExperienceInput
        handleExperienceInput={handleExperienceInput}
        experienceInput={experienceInput}
        handleExperienceDelete={handleExperienceDelete}
      />
    </>
  );
}

function handleCloseModal(dialogClass) {
  document.querySelector(dialogClass).style.display = 'none';
}
function handleOpenModal(dialogClass) {
  const modal = document.querySelector(dialogClass);
  modal.style.display = modal.style.display === 'none' ? 'grid' : 'none';
}
function PersonalDetailsInput({ handlePersonalInfoInput, personalInfoInput }) {
  return (
    <div className='personal-input-container'>
      <h1>Personal Info</h1>
      <form action='' className='personal-input-form'>
        <label htmlFor='input-fullname'>Full Name</label>
        <input
          type='text'
          id='input-fullname'
          name='fullName'
          value={personalInfoInput.fullName}
          onChange={(e) => handlePersonalInfoInput(e)}
        />
        <label htmlFor='input-email'>Email</label>
        <input
          type='text'
          id='input-email'
          name='email'
          value={personalInfoInput.email}
          onChange={(e) => handlePersonalInfoInput(e)}
        />
        <label htmlFor='input-phone-number'>Phone Number</label>
        <input
          type='text'
          id='input-phone-number'
          name='phone'
          value={personalInfoInput.phone}
          onChange={(e) => handlePersonalInfoInput(e)}
        />
        <label htmlFor='input-address'>Address</label>
        <input
          type='text'
          id='input-address'
          name='address'
          value={personalInfoInput.address}
          onChange={(e) => handlePersonalInfoInput(e)}
        />
      </form>
    </div>
  );
}

function EducationInput({
  handleEducationInput,
  educationInput,
  handleEducationDelete,
}) {
  return (
    <div className='education-input-container input-containers'>
      <button
        type='button'
        className='education-input-container-button input-containers-btn'
        onClick={() => {
          handleCloseModal('.education-input-form');
          handleOpenModal('.education-list');
        }}
      >
        Education
      </button>
      <div className='education-list input-lists'>
        <ul>
          <li>
            <div className='education-1'>Bachelor of Science</div>
          </li>
        </ul>
        <button
          type='button'
          className='education-add-list-btn input-add-list-btn'
          onClick={() => {
            handleCloseModal('.education-list');
            handleOpenModal('.education-input-form');
          }}
        >
          +
        </button>
      </div>

      <form action='' className='education-input-form input-forms'>
        <label>
          School
          <input
            type='text'
            name='school'
            value={educationInput.school}
            onChange={(e) => handleEducationInput(e)}
          />
        </label>
        <label>
          Degree
          <input
            type='text'
            name='degree'
            value={educationInput.degree}
            onChange={(e) => handleEducationInput(e)}
          />
        </label>
        <label>
          Start Year
          <input
            type='text'
            name='educationStartDate'
            value={educationInput.educationStartDate}
            onChange={(e) => handleEducationInput(e)}
          />
        </label>
        <label>
          End Year
          <input
            type='text'
            name='educationEndDate'
            value={educationInput.educationEndDate}
            onChange={(e) => handleEducationInput(e)}
          />
        </label>
        <label>
          Location
          <input
            type='text'
            name='educationLocation'
            value={educationInput.educationLocation}
            onChange={(e) => handleEducationInput(e)}
          />
        </label>
        <div className='education-form-btns from-btns'>
          <button
            type='button'
            className='education-delete-btn input-delete-btns'
            onClick={() => handleEducationDelete()}
          >
            Delete
          </button>
          <button
            type='button'
            className='education-cancel-btn input-cancel-btns'
            onClick={() => {
              handleCloseModal('.education-input-form');
              handleOpenModal('.education-list');
            }}
          >
            Cancel
          </button>
          <button className='education-add-btn input-add-btns'>Add</button>
        </div>
      </form>
    </div>
  );
}
function ExperienceInput({
  handleExperienceInput,
  experienceInput,
  handleExperienceDelete,
}) {
  return (
    <div className='experience-input-container input-containers'>
      <button
        type='button'
        className='experience-input-container-button input-containers-btn'
        onClick={() => {
          handleCloseModal('.experience-input-form');
          handleOpenModal('.experience-list');
        }}
      >
        Experience
      </button>
      <div className='experience-list input-lists'>
        <ul>
          <li>
            <div className='experience-1'>Bio-Inovations</div>
          </li>
        </ul>
        <button
          type='button'
          className='experience-add-list-btn input-add-list-btn'
          onClick={() => {
            handleCloseModal('.experience-list');
            handleOpenModal('.experience-input-form');
          }}
        >
          +
        </button>
      </div>

      <form action='' className='experience-input-form input-forms'>
        <label>
          Company
          <input
            type='text'
            name='company'
            value={experienceInput.company}
            onChange={(e) => handleExperienceInput(e)}
          />
        </label>
        <label>
          Job
          <input
            type='text'
            name='job'
            value={experienceInput.job}
            onChange={(e) => handleExperienceInput(e)}
          />
        </label>
        <label>
          Start Year
          <input
            type='text'
            name='experienceStartDate'
            value={experienceInput.experienceStartDate}
            onChange={(e) => handleExperienceInput(e)}
          />
        </label>
        <label>
          End Year
          <input
            type='text'
            name='experienceEndDate'
            value={experienceInput.experienceEndDate}
            onChange={(e) => handleExperienceInput(e)}
          />
        </label>
        <label>
          Location
          <input
            type='text'
            name='experienceLocation'
            value={experienceInput.experienceLocation}
            onChange={(e) => handleExperienceInput(e)}
          />
        </label>
        <div className='experience-form-btns from-btns'>
          <button
            type='button'
            className='experience-delete-btn input-delete-btns'
            onClick={() => handleExperienceDelete()}
          >
            Delete
          </button>
          <button
            type='button'
            className='experience-cancel-btn input-cancel-btns'
            onClick={() => {
              handleCloseModal('.experience-input-form');
              handleOpenModal('.experience-list');
            }}
          >
            Cancel
          </button>
          <button className='experience-add-btn input-add-btns'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default UserInputContainer;
