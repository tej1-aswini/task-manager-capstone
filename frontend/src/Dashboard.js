import { useState, useEffect } from "react";
import API from "./services/api";

console.log("DASHBOARD VERSION JUNE 24");

function Dashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // GET TASKS
  const getTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.log(err);
      alert("Error fetching tasks");
    }
  };

  // ADD TASK
  const addTask = async () => {

    try {
       const res = await API.post("/tasks/create", { title: task });
       console.log(res.data);
      setTask("");
      getTasks();
    } catch (err) {
      console.log("ERROR RESPONSE:", err.response);
      console.log("ERROR DATA:", err.response?.data);
      console.log("STATUS", err.response?.status);
      console.log("MESSAGE:", err.message);
      alert("Error adding task");
    }
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      getTasks();
    } catch (err) {
      console.log(err);
      alert("Error deleting task");
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Dashboard</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t) => (
          <li key={t._id}>
            {t.title}
            <button onClick={() => deleteTask(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;