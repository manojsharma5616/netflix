import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.scss'
import Home from "./Components/Home";
import Header from "./Components/Header";
function App() {
  return (
  <Router>
  <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
