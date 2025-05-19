import "./App.css";
import LandingPage from "./pages/landing";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<LandingPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
