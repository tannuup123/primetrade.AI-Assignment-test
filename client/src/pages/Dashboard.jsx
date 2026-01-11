// Dashboard.jsx
import { useEffect, useState } from "react";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      // latest first
      setList(res.data.reverse());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!tasks.trim()) return;

    const res = await api.post("/tasks", { title: tasks });
    setList([res.data, ...list]);
    setTasks("");
  };

  const toggleTask = async (task) => {
    const res = await api.put(`/tasks/${task._id}`, {
      status: task.status === "pending" ? "completed" : "pending",
    });

    setList(list.map((t) => (t._id === task._id ? res.data : t)));
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setList(list.filter((t) => t._id !== id));
  };

  const total = list.length;
  const completed = list.filter((t) => t.status === "completed").length;
  const pending = total - completed;

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>
            Welcome, {user.name} <span>👋</span>
          </h1>
          <p>Stay focused. Get things done.</p>
        </div>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <span>{total}</span>
        </div>
        <div className="stat-card success">
          <h3>Completed</h3>
          <span>{completed}</span>
        </div>
        <div className="stat-card warning">
          <h3>Pending</h3>
          <span>{pending}</span>
        </div>
      </div>

      {/* ADD TASK */}
      <div className="task-input">
        <input
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          placeholder="What do you need to do?"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* TASK LIST */}
      {loading ? (
        <p className="empty">Loading tasks...</p>
      ) : list.length === 0 ? (
        <p className="empty">No tasks yet 🚀</p>
      ) : (
        <div className="task-list">
          {list.map((task) => (
            <div
              key={task._id}
              className={`task-card ${
                task.status === "completed" ? "done" : ""
              }`}
            >
              <div>
                <h4>{task.title}</h4>
                <small>{task.status}</small>
              </div>

              <div className="actions">
                <button onClick={() => toggleTask(task)}>Toggle</button>
                <button className="danger" onClick={() => deleteTask(task._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
