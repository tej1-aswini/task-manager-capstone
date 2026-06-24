import { useState } from "react";
import API from "../services/api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/register", {
        username,
        password,
      });

      alert("User Registered Successfully");
      console.log(res.data);
    } catch (err) {
     console.log("REGISTER ERROR:",err.response?.data || err.message);
     alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Register</button>
        <p>
            Already Have Account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Register;