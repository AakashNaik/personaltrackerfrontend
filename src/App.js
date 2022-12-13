import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AddTask from './components/AddTask';
import SeeTasks from './components/SeeTasks';
import Summary from './components/Summary';
import { Fragment } from 'react';


function App() {
  return (
  <Router>
      <Fragment class='background'>
        <div class="flex-row">
          <div>
            <Link to="/"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Summary</button></Link>
          </div>
          <div>
            <Link to="/SeeTask"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">See Task</button></Link>
          </div>
          <div>
            <Link to="/AddTask"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Task</button></Link>
          </div>
        </div>
        <Routes>
              <Route exact path='/' element={< Summary />}></Route>
              <Route exact path='/SeeTask' element={< SeeTasks />}></Route>
              <Route exact path='/AddTask' element={< AddTask />}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
