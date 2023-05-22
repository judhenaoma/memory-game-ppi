// Autor: Juan David Henao Marín 
// Fecha: 2023-05-21
// Funcionalidad: Renderizar la descripción del juego
// Descripción: Componente que muestra la descripción del juego
// Path: src\components\GameInfo.jsx

export function GameInfo() {
    // Render the game info User Interface
    return(
        <div className="info_text">
            <h1>Juego de atención y memoria</h1>
            <p>Encuentra pares de librerías de Python en la menor cantidad de intentos.</p>
        </div>
    )
}