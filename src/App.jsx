import { useState } from "react";
import "./App.css";

export default function App() {
  let [displayName, setDisplayName] = useState(false);
  let [fullname, setFullname] = useState("");

  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");

  const validate = (nameT, lastNameT) => {
    if (nameT.trim() === "" || lastNameT.trim() === "") {
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setDisplayName(true);
    if (!validate(name, lastName)) {
      return;
    }
    setFullname(`Full Name: ${name} ${lastName}`);
  };

  return (
    <main>
      <h1>Full Name Display</h1>
      <form>
        <label>First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          id="fname"
          name="lname"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />
        <br />
        <button type="submit" onClick={handleFormSubmit}>
          Submit
        </button>
        <br />
        {displayName && <p>{fullname}</p>}
      </form>
    </main>
  );
}
