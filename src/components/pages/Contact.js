import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const [showText, setShowText] = useState(false)
  const handleMouseEnter = e => {
    e.target.style.background = "grey"
    
    setShowText(true)}
    const handleMouseLeave = e => {
        if(e.target.value== ''){
        setErrorMessage('Please fill in the fields');
        setShowText(false)
        }else {setErrorMessage('ok')}
    //   e.target.style.background = "maroon"
    //   setShowText(false)
    }
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    //First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('')
  };


  return (
    <div className="card m-5">
     <div className="card-body ">
         <header className="text-center card-title fs-4 ms-3 pb-4 fw-bold">Contact</header>
      <form className="form mb-0 p-3 shadow-lg">
          <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label fs-5">Email address</label>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                type="email"
                placeholder="email"
                id="exampleFormControlInput1"
                className="form-control shadow-lg"
              />
          </div>
         <div className="mb-3">
             <label for="exampleFormControlInput2" className="form-label fs-5">Name</label>
             <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                type="text"
                placeholder="username"
                id="exampleFormControlInput2"
                className="form-control shadow-lg"

            />
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label fs-5">Message</label>
            <input
                value={message}
                name="message"
                onChange={handleInputChange}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                type="message"
                placeholder="message"
                id="exampleFormControlTextarea1"
                className="form-control shadow-lg"
             />
        </div>
        <button className="btn btn-secondary my-3 fs-4 shadow-lg" type="button" onClick={handleFormSubmit}>Submit</button>
        <div id="incomplete"></div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Form;
