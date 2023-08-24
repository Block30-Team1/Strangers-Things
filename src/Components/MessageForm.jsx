import { useState } from "react";

export default function MessageForm() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");

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
          <input
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <label>
          Your Message:
          <input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </label>

        <button type="submit">Submit Message</button>
      </form>
    </>
  );
}
