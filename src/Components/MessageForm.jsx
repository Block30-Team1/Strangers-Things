import { useState } from "react";

export default function MessageForm() {
  const [firstname, setFirstName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname: 
          <input
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <label>
            Lastname: 
        </label>
        
        <button type = "submit">Submit Message</button>
      </form>
    </>
  );
}
