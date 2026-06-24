import { useState, useEffect } from "react";
import API from "../services/api";

function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  //  GET TASKS (AUTO LOAD + MANUAL REFRESH)
  const getTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      alert("Error fetching tasks");
    }
  };

  //  CREATE TASK
  const addTask = async () => {
    try {
      await API.post("/tasks/create", { title: task });
      setTask("");
      getTasks();
    } catch (err) {
      alert("Error adding task");
    }
  };

  //  DELETE TASK
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      getTasks();
    } catch (err) {
      alert("Error deleting task");
    }
  };

  //  AUTO LOAD TASKS ON PAGE LOAD
  useEffect(() => {
    getTasks();
  }, []);

  //  LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <button onClick={logout}>Logout</button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>
      <button onClick={getTasks}>Reload Tasks</button>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.title}

            <button
              onClick={() => deleteTask(t._id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;