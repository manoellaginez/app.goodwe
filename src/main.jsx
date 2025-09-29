import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Importa a lógica da sua aplicação que acabamos de criar
import './index.css'; // Importa seus estilos globais (o tema Light que você adicionou)

// O resto é a inicialização padrão do React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);