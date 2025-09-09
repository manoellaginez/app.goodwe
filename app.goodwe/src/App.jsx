import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./screens/cadastro/cadastro.jsx"; // importa seu componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
