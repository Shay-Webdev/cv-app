import '../styles/user-input.css';

function UserInputContainer() {
  return (
    <>
      <PersonalDetailsInput />
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
function PersonalDetailsInput() {
  return (
    <form action='' className='personal-input-form'>
      <label htmlFor='input-fullname'>Full Name</label>
      <input type='text' id='input-fullname' />
      <label htmlFor='input-email'>Email</label>
      <input type='text' id='input-email' />
      <label htmlFor='input-phone-number'>Phone Number</label>
      <input type='text' id='input-phone-number' />
      <label htmlFor='input-address'>Address</label>
      <input type='text' id='input-address' />
    </form>
  );
}

function EducationInput() {
  return (
    <div className='education-input-container input-containers'>
      <button
        type='button'
        className='education-input-container-button input-containers-btn'
        onClick={() => {
          handleOpenModal('.education-input-form');
        }}
      >
        Education
      </button>
      <form action='' className='education-input-form input-forms'>
        <label>
          Institute
          <input type='text' />
        </label>
        <label>
          Degree
          <input type='text' />
        </label>
        <label>
          Start Year
          <input type='text' />
        </label>
        <label>
          End Year
          <input type='text' />
        </label>
        <label>
          Location
          <input type='text' />
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
            onClick={() => handleCloseModal('.education-input-form')}
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
        onClick={() => handleOpenModal('.experience-input-form')}
      >
        Experience
      </button>
      <form action='' className='experience-input-form input-forms'>
        <label>
          Company
          <input type='text' />
        </label>
        <label>
          Job
          <input type='text' />
        </label>
        <label>
          Start Year
          <input type='text' />
        </label>
        <label>
          End Year
          <input type='text' />
        </label>
        <label>
          Location
          <input type='text' />
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
            onClick={() => handleCloseModal('.experience-input-form')}
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
