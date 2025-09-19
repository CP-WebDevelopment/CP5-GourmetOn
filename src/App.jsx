import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
}

export default App;
