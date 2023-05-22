// Autor: Juan David Henao Marín 
// Fecha: 2023-05-21
// Funcionalidad: Renderizar la interfaz de usuario del juego
// Descripción: Componente principal de la aplicación
// Path: src\App.jsx

// Importar módulos
import { useState, useEffect, useRef } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { shuffleCards } from "./utilities/suffle";
import { Score } from "./components/Score";
import { Tries } from "./components/Tries";
import { Win } from "./components/Win";
import { Footer } from "./components/Footer";
import { GameInfo } from "./components/GameInfo";
import { Lose } from "./components/Lose";

function App() {

  // Shuffle the cards when the game starts
  useEffect(() => {
    setCards(shuffleCards);
  }, []);

  // States of the game
  const [cards, setCards] = useState([]);
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [score, setScore] = useState(0);
  const [trys, setTrys] = useState(12);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  // Check if the user loses the game and track the trys
  useEffect(() => {
    checkLose();
    pickTwo && setTrys((prev) => prev - 1);
  }, [pickTwo]);

  // Check if the user wins the game
  useEffect(() => {
    checkWin();
  }, [score]);

  // Function to handle the user's try when selecting a card
  const handleTry = (name, id) => {
    // If one card is already selected, select the second one
    pickOne !== null ? setPickTwo(name) : setPickOne(name);
    // Tag the card selected as 'selected'
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === id) {
          return { ...card, selected: true };
        } else {
          return card;
        }
      });
    });
  };

  // Verify when the user wins the game
  const checkWin = () => {
    // If the user completes all the pairs, the user wins
    const cardsCompleted = cards.filter((card) => !!card.selected);
    cardsCompleted.length === 16 && setWin(true)
  };

  // Function to reset the game
  const handleReset = () => {
    // The score is reset
    setScore(0);
    // The cards are reset
    setPickOne(null);
    setPickTwo(null);
    // The win and lose states are reset
    setWin(false);
    setLose(false);
    // The trys are reset
    setTrys(12);
    // The cards are shuffled and the game starts again
    setCards(shuffleCards);
  };

  // Verify when the user loses the game
  const checkLose = () => {
    // If the user runs out of trys, the game is over
    if (trys === 0) {
      // The user loses the game
      setLose(true);
      // The game is reset after 2 seconds
      setTimeout(() => {
        handleReset();
      }, 4000);
    }
  };

  // Compare the two selected cards
  if (pickOne && pickTwo) {
    // If the cards are the same, keep them selected
    if (pickOne === pickTwo) {
      // Increase the score
      setScore(score + 1);
      // Tag the cards as 'selected'
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.image === pickOne) {
            return { ...card, selected: true };
          } else {
            return card;
          }
        });
      });
      // Reset the selected cards
      setPickOne(null);
      setPickTwo(null);
    }
    // If the cards are different, unselect them
    else {
      // Wait 1 second and unselect the cards
      setTimeout(() => {
        // Tag the cards that dont match as 'unselected'
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne || card.image === pickTwo) {
              return { ...card, selected: false };
            } else {
              return card;
            }
          });
        });
        // Reset the selected cards
        setPickOne(null);
        setPickTwo(null);
      }, 1500);
    }
  }
  // Render the game User Interface
  return (
    <>
      <div className="App">
        {win && <Win score={score} trys={trys} handleReset={handleReset} />}
        {lose && <Lose/>}
        <div className="info-container">
          <GameInfo />
          <Score score={score} />
          <Tries tries = {trys}/>
        </div>
        <div className="grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              img={card}
              handleTry={handleTry}
              pairedCards={pickTwo}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
