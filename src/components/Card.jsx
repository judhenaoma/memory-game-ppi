// Autor: Juan David Henao Marín 
// Fecha: 2023-05-21
// Funcionalidad: Renderizar las cartas del juego
// Descripción: Componente que renderiza las cartas del juego
// Path: src\components\Card.jsx

// Importar módulos
import { useState } from "react";
import "../styles/card.css";

export function Card({ img, handleTry, pairedCards }) {
  // State to flip the card or not
  const [flip, setFlip] = useState(false);

  // Handle the card selection
  const handleSelect = () => {
    handleTry(img.image, img.id);
    setFlip(true);
  };
  // Render the card User Interface
  return (
    <>
      {img.selected ? (
        <img
          src={img.image}
          className={`grid__card 
                        grid__card__back
                                ${flip ? "flip" : ""}`}
        />
      ) : (
        <img
          src="/assets/python.jpg"
          className={`grid__card grid__card__front
                                ${flip ? "flip" : ""}`}
          onClick={!pairedCards ? handleSelect : null}
        />
      )}
    </>
  );
}
