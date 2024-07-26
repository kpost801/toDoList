import { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import Today from "./javascript/Today";
import Priority from "./javascript/Priority";
import Tomorrow from "./javascript/Tomorrow";

function App() {
  const [count, setCount] = useState(0);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formatDate = date.toLocaleDateString();
    setCurrentDate(formatDate);
  }, []);

  return (
    <>
      <Router>
        <h1>Your To Do List</h1>
        <h2> Todays Date: {currentDate}</h2>
        <div className="row">
          <div className="col">
            <Link to="/today">
              <div className="card">
                <h3>Today's List</h3>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/tomorrow">
              <div className="card">
                <h3>Tomorrow's list</h3>
              </div>
            </Link>
          </div>
          <div className="col">
            <Link to="/priority">
              <div className="card">
                <h3>Priority</h3>
              </div>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/today" />} />
          <Route path="/today" element={<Today />} />
          <Route path="/priority" element={<Priority />} />
          <Route path="/tomorrow" element={<Tomorrow />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
