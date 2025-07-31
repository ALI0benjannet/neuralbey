import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const[task,setTask]=useState("");
  useEffect(() => {
    fetch('http://localhost:8000/api/tasks/')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      title: task,
      completed: false,
    };

    fetch('http://localhost:8000/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks((prev) => [...prev, data]);
        setTask('');
      })
      .catch((err) => console.error('Error creating task:', err));
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>Task List</h1>
      <div>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleSubmit}>okkkayy</button>
      </div>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title} — {task.completed ? '✅ Completed' : '❌ Not Completed'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
