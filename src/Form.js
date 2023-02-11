import React from "react";

const Form = ({ setMembers }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phoneNumber = form.elements.phoneNumber.value;
    const address = form.elements.address.value;

    // Create a new member object
    const newMember = { name, email, phoneNumber, address };

    // Add the member to the list of members
    setMembers(prevMembers => [...prevMembers, newMember]);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Fitness club registration</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" />
      </div>
      <button type="submit">Add member</button>
    </form>
  );
};

export default Form


 