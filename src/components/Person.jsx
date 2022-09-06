import React from "react";

const Person = () => {
  return (
    <div className="column">
      <div className="inputelement">
        <label>First Name</label>
        <input type="text" placeholder="eg. Michael" />
      </div>
      <div className="inputelement">
        <label>Last Name</label>
        <input type="text" placeholder="eg. Sandler" />
      </div>
      <div className="inputelement">
        <label>Email</label>
        <input placeholder="eg. michael@example.com" type="text" />
      </div>
      <div className="inputelement">
        <label>Phone Number</label>
        <input placeholder="eg. 1 800 456 7890" type="text" />
      </div>
      <div className="inputelement">
        <label>Number of Tickets</label>
        <input type="text" placeholder="1" />
      </div>
    </div>
  );
};

export default Person;
