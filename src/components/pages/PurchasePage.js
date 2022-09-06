import React from "react";
import Person from "../Person";

const PurchasePage = () => {
  return (
    <div className="purchasepage">
      <div>
        <h1 className="display-3 text-info">Checkout</h1>
        <h3 className="display-6 text-light">Ticket Information</h3>
      </div>
      <section className="purchaseinfo">
        <div className="column">
          <div className="inputelement row">
            <label>First Name</label>
            <input type="text" placeholder="eg. Michael" />
          </div>
          <div className="inputelement row">
            <label>Last Name</label>
            <input type="text" placeholder="eg. Sandler" />
          </div>
          <div className="inputelement row">
            <label>Email</label>
            <input placeholder="eg. michael@example.com" type="text" />
          </div>
          <div className="inputelement row">
            <label>Phone Number</label>
            <input placeholder="eg. 1 800 456 7890" type="text" />
          </div>
          <div className="inputelement row">
            <label>Number of Tickets</label>
            <input type="text" placeholder="1" />
          </div>
          <div className="inputelement row">
            <label>We are excited to see you there!</label>
            <button className="btn-slide-purchase">Purchase</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurchasePage;
