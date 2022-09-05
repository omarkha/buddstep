import React from "react";

const SignUpForm = () => {
  return (
    <div className="signupform">
      <div>
        <h3 className="text-light">Get Your Tickets Today!</h3>
        <p className="text-light">
          Enjoy a fun time and get lit with the coolest lads in town. Don't miss
          out on an amazing experience and live life like a champion. Everything
          you need, we've got it! Get your tickets today and join us in Area51.
        </p>
      </div>
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Full Name" />
      <button className="btn-slide">Purchase Ticket</button>
    </div>
  );
};

export default SignUpForm;