import "./App.css";
import Authentication from "./pages/authentication";
import LandingPage from "./pages/landing";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<LandingPage/>}></Route>
          <Route path="/auth" element={<Authentication/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
