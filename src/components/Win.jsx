// Autor: Juan David Henao Marín 
// Fecha: 2023-05-21
// Funcionalidad: Renderizar un mensaje cuando el usuario gana el juego
// Descripción: Componente que renderiza un mensaje cuando el usuario gana el juego
// Path: src\components\Win.jsx

export function Win({ score, trys, handleReset }) {
  return (
    <div className="win">
      <h1 style={{color:'green'}} >¡Ganaste!</h1>
      <h2>Puntaje: {score}</h2>
      <h2>Intentos: {trys}</h2>
      <button onClick={handleReset}>Jugar de nuevo</button>
    </div>
  );
}