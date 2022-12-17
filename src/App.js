import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import AddTask from './components/AddTask';
import SeeTasks from './components/SeeTasks';
import Summary from './components/Summary';



function App() {
  return (
  <Router>
      <div class='background'>
        <div class="flex-row" style={{'marginRight':'20px','marginTop':'10px'}}>
          <div class='buttonstyle hover:scale-110'>
            <Link to="/"><button class="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">Summary</button></Link>
          </div>
          <div class='buttonstyle hover:scale-110'>
            <Link to="/SeeTask"><button class="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">See Task</button></Link>
          </div>
          <div class='buttonstyle hover:scale-110'>
            <Link to="/AddTask"><button class="bg-white hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">Add Task</button></Link>
          </div>
        </div>
        <Routes>
              <Route exact path='/' element={< Summary />}></Route>
              <Route exact path='/SeeTask' element={< SeeTasks />}></Route>
              <Route exact path='/AddTask' element={< AddTask />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
