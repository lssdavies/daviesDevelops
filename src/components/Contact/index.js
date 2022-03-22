import React, { useState } from "react";
//importing the helper of function to validate email
import { validateEmail } from "../../assets/utils/helpers";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import { IconContext } from "react-icons";

function Contact() {
  /*Hook to manage the form data and initialize the values of the state. formState will have three key-value pairs to represent the three user inputs: name, email, and message*/
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //Hook to validate the form data and initialize error message to a blank string
  const [errorMessage, setErrorMessage] = useState("");

  //destructuring the formState object to its named properties, name, email, and message.
  const { name, email, message } = formState;

  /* Function to sync the internal state of the component formState with the user input*/
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      //the else contitional statement checks the value of target.name (this will include name and message) is blank by checking if there is a length value
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    console.log("errorMessage", errorMessage);
  }
  //Function to handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <>
      <div className="contentContainer">
        <section className="contentPage">
          <div className="projectContainer">
            <h1 className="title">
              <span style={{ color: "#172243" }}>[</span>Contact
              <span style={{ color: "#172243" }}>]</span>
            </h1>
            <div className="cardContainer">
              <div className="card">
                <div className="cardTitle">
                  <h2>
                    Interested in working me? I'll be more than to dicuss the
                    possibility with you further. Please fill out the form below
                    and i will get back to you at my earliest convenience.
                  </h2>
                </div>
                <div className="cardBody">
                  <div className="Form">
                    <form id="contact-form" onSubmit={handleSubmit}>
                      <div>
                        {/* Since for is a reserved keyword in JS replace the label element attribute for with htmlFor. Similar to class and ClassName */}
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          defaultValue={name}
                          /* onBlur is the event that triggers the call of function handleChange, this mean it will run after the user in no longer focused on the input*/
                          onBlur={handleChange}
                          name="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email">Email :</label>
                        <input
                          type="email"
                          name="email"
                          defaultValue={email}
                          onBlur={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                          name="message"
                          rows="5"
                          defaultValue={message}
                          onBlur={handleChange}
                        />
                      </div>
                      {/* /using short circuit so that if errorMessage evaluates to true the message will render if not it doesnt render */}
                      {errorMessage && (
                        <div>
                          <p className="error-text">{errorMessage}</p>
                        </div>
                      )}
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <IconContext.Provider value={{ size: "2rem", color: "#172243" }}>
              <div className="footer">
                <a
                  href="https://github.com/lssdavies"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <AiFillGithub />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/larry-davies-6a95b2221/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <AiFillLinkedin />
                  </span>
                </a>
                <a
                  href="https://stackoverflow.com/users/16962636/lssdavies"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span>
                    <ImStackoverflow />
                  </span>
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact