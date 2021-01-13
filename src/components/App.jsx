import React from "react";
import contacts from "../contacts";
import Details from "./details";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Details
        name={contacts[0].name}
        img={contacts[0].imgURL}
        mob={contacts[0].phone}
        email={contacts[0].email}
      />
      <Details
        name={contacts[1].name}
        img={contacts[1].imgURL}
        mob={contacts[1].phone}
        email={contacts[1].email}
      />
      <Details
        name={contacts[2].name}
        img={contacts[2].imgURL}
        mob={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
