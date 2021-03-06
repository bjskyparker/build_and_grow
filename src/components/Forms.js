import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${name}`);
    alert(`Submitting Name ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Forms;
