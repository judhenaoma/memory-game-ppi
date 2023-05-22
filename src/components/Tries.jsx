// Autor: Juan David Henao Marín 
// Fecha: 2023-05-21
// Funcionalidad: Renderizar la cantidad de intentos restantes
// Descripción: Componente que renderiza la cantidad de intentos restantes
// Path: src\components\Tries.jsx

export function Tries({ tries }) {
  return (
    <div className="tries">
      <h2>Intentos : { tries }</h2>
    </div>
  );
}
