import { useState, useRef } from "react";
import "./App.css";

export default function App() {
  let [displayName, setDisplayName] = useState(false);
  let [fullname, setFullname] = useState("");

  let name = useRef("");
  let lastName = useRef("");

  const checkSpecialCharacter = (value) => {
    let specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (value.match(specialCharacters)) {
      return true;
    } else {
      return false;
    }
  };

  const validate = (nameT, lastNameT) => {
    if (nameT.trim() === "" || lastNameT.trim() === "") {
      return false;
    }

    if (checkSpecialCharacter(nameT) || checkSpecialCharacter(lastNameT)) {
      return false;
    }
    return true;
  };

  const handleFormSubmit = () => {
    setDisplayName(true);
    let nameT = name.current.value;
    let lastNameT = lastName.current.value;

    if (!validate(nameT, lastNameT)) {
      return;
    }
    setFullname(`Full Name: ${nameT} ${lastNameT}`);
  };

  return (
    <main>
      <h1>Full Name Display</h1>
      <label>First Name:</label>
      <input type="text" id="fname" name="fname" ref={name} />
      <br />
      <label>Last Name:</label>
      <input type="text" id="fname" name="fname" ref={lastName} required />
      <br />
      <button type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
      <br />
      {displayName && <p>{fullname}</p>}
    </main>
  );
}
