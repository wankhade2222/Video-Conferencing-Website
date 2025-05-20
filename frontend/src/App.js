import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Authentication from "./pages/authentication";
import LandingPage from "./pages/landing";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <Routes>
          <Route path = "/" element = {<LandingPage/>}></Route>
          <Route path="/auth" element={<Authentication/>}></Route>
        </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
