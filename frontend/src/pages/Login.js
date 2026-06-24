import { useState } from "react";
import API from "../services/api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", {
        username,
        password,
      });

      console.log("LOGIN SUCCESS:", res.data);

      alert(res.data.message || "Login Successful");

      // store token safely (only if backend sends it)
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      window.location.href = "/dashboard";

    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data || err.message);

      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
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

        <button type="submit">Login</button>

        <p>
          New user? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;