import { useState } from "react";
import CreateTask from "./components/CreateTask";
import ReadTasks from "./components/ReadTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";




function App() {
  const [refresh, setRefresh] = useState(false);
  

  const refreshTasks = () => setRefresh((prev) => !prev);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <CreateTask refreshTasks={refreshTasks} />
      <ReadTasks key={refresh} />
      <ToastContainer position="top-right" autoClose={3000}/>
    </div>
  );
}

export default App;