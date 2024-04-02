import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './views/home.jsx'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>      
    </Router>
  );
}

export default App; 
