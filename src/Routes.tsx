import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Evolucao from "./pages/Evolucao";
import Home from "./pages/Home";

export default function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/evolucao" element={<Evolucao/>} />
      </Routes>
    </Router>
  )
}