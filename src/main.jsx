// Autor: Juan David Henao Marín 
// Fecha: 2023-05-21
// Funcionalidad: Montar la aplicación
// Path: src\main.jsxs

// Importar módulos
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Renderiza la aplicacion en un contenedor de HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
