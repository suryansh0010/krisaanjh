
import React, { useState } from "react";
import { auth } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./UniqueRegister.css"; // Renamed the CSS file to be unique
import image1 from '../../assets/Asset 1@4x 1.png'
const UniqueRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password);
      console.log("Account created");
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <img src={image1} alt="logo" />
        <div className="unique-login-container mt-4">
          <div className="unique-login-box">
            <h2 className="text-[25px]">Sign In</h2>
            <form className="mt-10" onSubmit={handleSubmit}>
              <div className="unique-form-group">
                <label>Email</label>
                <input
                  className="unique-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="unique-form-group">
                <label>Password</label>
                <input
                  className="unique-password mt-"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="unique-login-btn " type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueRegister;
