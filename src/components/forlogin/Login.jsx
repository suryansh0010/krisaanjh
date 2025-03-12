import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { account } from "../../appwrite/config";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Check if session is already active
  useEffect(() => {
    const sessionExpiration = localStorage.getItem("sessionExpiration");
    const currentTime = new Date().getTime();

    // If session exists and is not expired, navigate to home
    if (sessionExpiration && currentTime < parseInt(sessionExpiration)) {
      navigate("/Home");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Log in the user
      const session = await account.createSession(email, password); // Use createSession
      // Store session expiration in localStorage (1 hour from current time)
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour in milliseconds
      localStorage.setItem("sessionExpiration", expirationTime);

      // Navigate to home on success
      navigate("/Home");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
