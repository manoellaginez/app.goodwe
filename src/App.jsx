import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Corrigido o caminho de importação (Assumindo que os nomes dos arquivos estão em caixa baixa e o caminho está correto)
import Navbar from './components/Navbar.jsx'; 
import Inicio from './pages/home/inicio.jsx'; 
import AdicionarDispositivo from './pages/home/adicionardispositivo.jsx'; 
import Gastos from './pages/home/gastos.jsx'; 
import Perfil from './pages/home/perfil.jsx';
import Mais from './pages/home/mais.jsx'; 
import DetalheDispositivo from './pages/home/detalhedispositivo.jsx'; 
import Assistente from './pages/home/assistente.jsx';
import './styles/standard_text.css';

const initialDevices = [
  { id: 1, name: 'Lâmpada Sala', type: 'Lâmpada', status: true, room: 'Sala' },
  { id: 2, name: 'Ar Cond. Quarto', type: 'Ar Condicionado', status: false, room: 'Quarto' },
];

function App() {
  const [devices, setDevices] = useState(initialDevices);
  
  // Função para adicionar um novo dispositivo
  const handleAddDevice = (newDevice) => {
    // Usamos um timestamp para garantir IDs únicos
    const deviceWithId = { ...newDevice, id: Date.now(), status: false }; // Novo dispositivo começa desligado
    setDevices((prevDevices) => [...prevDevices, deviceWithId]);
  };
  
  // Função para alternar o status do dispositivo
  const handleToggleDevice = (id) => {
    setDevices(devices.map(device => 
        device.id === id ? { ...device, status: !device.status } : device
    ));
  };
  
  // NOVA FUNÇÃO: Remover o dispositivo da lista
  const handleRemoveDevice = (idToRemove) => {
      setDevices(devices.filter(device => device.id !== idToRemove));
  };

  return (
    <Router>
      <div className="app-container" style={{ paddingBottom: '60px' }}> {/* Adiciona padding para a Navbar */}
        <div className="page-content">
          <Routes>
            {/* Rota principal (Home/Início) */}
            <Route 
              path="/" 
              element={<Inicio devices={devices} onToggleDevice={handleToggleDevice} />} 
            /> 
            
            {/* Rota para o formulário de Adicionar Dispositivo */}
            <Route 
              path="/adicionar-dispositivo" 
              element={<AdicionarDispositivo onAddDevice={handleAddDevice} />} 
            />
            
            {/* Rota para os DETALHES do Dispositivo */}
            <Route 
              path="/dispositivo/:id" 
              element={<DetalheDispositivo 
                          devices={devices} 
                          onRemoveDevice={handleRemoveDevice} 
                          onToggleDevice={handleToggleDevice} 
                        />} 
            />
            
            {/* Rotas da Navbar */}
            <Route path="/gastos" element={<Gastos />} />
            
            {/* Mantido como 'Mais' (que é o que você importou) para resolver a rota /assistente */}
            <Route path="/assistente" element={<Assistente />} /> 
            
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/mais" element={<Mais />} />
          </Routes>
        </div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
