import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AddTask from './components/AddTask';
import SeeTasks from './components/SeeTasks';
import Summary from './components/Summary';


function App() {
  return (
  <Router>
      <>
        <ul className="App-header">
          <li>
            <Link to="/">Summary</Link>
          </li>
          <li>
            <Link to="/SeeTask">See Task</Link>
          </li>
          <li>
            <Link to="/AddTask">Add Task</Link>
          </li>
        </ul>
        <Routes>
              <Route exact path='/' element={< Summary />}></Route>
              <Route exact path='/SeeTask' element={< SeeTasks />}></Route>
              <Route exact path='/AddTask' element={< AddTask />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
