import { useState } from "react";

export default function Contact() {
  const defaultForm = { name: "", email: "", message: "" };
  const [newContact, setNewContact] = useState(defaultForm);
  const [disableSubmit, setDisableSubmit] = useState(true);
  function handleInputChange(e) {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  }

  function validateInputs(e) {
    let validated;
    const emailValidation =
      /^([A-Za-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (e.target.name === "name" && !e.target.value) {
      validated = false;
      e.target.className = "form-control is-invalid";
    } else if (
      e.target.name === "email" &&
      !emailValidation.test(e.target.value)
    ) {
      validated = false;
      e.target.className = "form-control is-invalid";
    } else if (e.target.name === "message" && !e.target.value) {
      validated = false;
      e.target.className = "form-control is-invalid";
    } else {
      validated = true;
    }

    if (!validated) {
      setDisableSubmit(true);
    } else {
      setDisableSubmit(false);
      e.target.className = "form-control is-valid";
    }

    return validated;
  }

  async function addNewContact(e) {
    e.preventDefault();

    try {
      console.log(newContact);
      alert("Contact form submitted!");
    } catch (err) {
      console.log(err.message);
    }

    // revert form back to its original state
    setNewContact(defaultForm);
  }

  return (
    <>
      <h4>Contact Me</h4>
      <div className="row mb-3">
        <h6 className="col-auto">
          <i className="fa-solid fa-phone-flip" /> &nbsp;612-386-3245
        </h6>
        <h6 className="col">
          <i className="fa-solid fa-envelope" /> &nbsp;j.preimesberger@gmail.com
        </h6>
      </div>
      <div className="row">
        <form className="col-5 form-" onSubmit={addNewContact}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={newContact.name}
              onChange={handleInputChange}
              onBlur={validateInputs}
              required
            />
            <div className="invalid-feedback">Name is required</div>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={newContact.email}
              onChange={handleInputChange}
              onBlur={validateInputs}
              required
            />
            <div className="invalid-feedback">
              A valid email address is required
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              value={newContact.message}
              onChange={handleInputChange}
              onBlur={validateInputs}
              required
            />
            <div className="invalid-feedback">Message is required</div>
          </div>

          <div className="mb-3"></div>

          <button
            type="submit"
            className="btn btn-dark mb-2"
            disabled={disableSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
