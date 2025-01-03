import '../styles/user-input.css';

function UserInputContainer({ handlePersonalInfoInput }) {
  return (
    <>
      <div className='input-top'>
        <button type='button'>Clear</button>
        <button type='button'>Example</button>
      </div>
      <PersonalDetailsInput handlePersonalInfoInput={handlePersonalInfoInput} />
      <EducationInput />
      <ExperienceInput />
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
function PersonalDetailsInput({ handlePersonalInfoInput }) {
  return (
    <div className='personal-input-container'>
      <h1>Personal Info</h1>
      <form action='' className='personal-input-form'>
        <label htmlFor='input-fullname'>Full Name</label>
        <input
          type='text'
          id='input-fullname'
          name='fullName'
          onChange={(e) => handlePersonalInfoInput(e)}
        />
        <label htmlFor='input-email'>Email</label>
        <input
          type='text'
          id='input-email'
          name='email'
          onChange={(e) => handlePersonalInfoInput(e)}
        />
        <label htmlFor='input-phone-number'>Phone Number</label>
        <input
          type='text'
          id='input-phone-number'
          name='phone'
          onChange={(e) => handlePersonalInfoInput(e)}
        />
        <label htmlFor='input-address'>Address</label>
        <input
          type='text'
          id='input-address'
          name='address'
          onChange={(e) => handlePersonalInfoInput(e)}
        />
      </form>
    </div>
  );
}

function EducationInput() {
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
          <input type='text' name='school' />
        </label>
        <label>
          Degree
          <input type='text' name='degree' />
        </label>
        <label>
          Start Year
          <input type='text' name='educationStartDate' />
        </label>
        <label>
          End Year
          <input type='text' name='educationEndDate' />
        </label>
        <label>
          Location
          <input type='text' name='educationLocation' />
        </label>
        <div className='education-form-btns from-btns'>
          <button
            type='button'
            className='education-delete-btn input-delete-btns'
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
function ExperienceInput() {
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
          <input type='text' name='company' />
        </label>
        <label>
          Job
          <input type='text' name='job' />
        </label>
        <label>
          Start Year
          <input type='text' name='experienceStartDate' />
        </label>
        <label>
          End Year
          <input type='text' name='experienceEndDate' />
        </label>
        <label>
          Location
          <input type='text' name='experienceLocation' />
        </label>
        <div className='experience-form-btns from-btns'>
          <button
            type='button'
            className='experience-delete-btn input-delete-btns'
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
