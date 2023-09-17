import { useState } from "react";

import "../Home/home.css";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="">
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <label for="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            type="email"
            name=""
            id=""
            className="p-3"
          />
          <label for="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="your password"
            type="password"
            name=""
            id=""
            className="p-3"
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
