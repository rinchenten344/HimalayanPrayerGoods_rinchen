import React from "react";

const Contact = () => {
  return (
    <div className="contactcontainer">
      <h1>Contact Us</h1>
      <p>
        Feel free to reach out to us using the form below or through our contact
        information.
      </p>

      <form>
        <label>
          Name:
          <input className="box" type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input className="box" type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea className="box" name="message" rows="4" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Contact Information</h2>
        <p>Email: himalayanggoods@gmail.com</p>
        <p>Phone: (917) 889-0000</p>
        <p>Address: 321 Main Street, Cityville, State, 12345</p>
      </div>
    </div>
  );
};

export default Contact;
