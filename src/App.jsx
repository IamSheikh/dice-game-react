// import React
import React, { useState } from 'react';
// import styled
import styled from 'styled-components';

// import images/dice-01.png as dice_01
import dice_01 from './images/dice-01.png';
// import images/dice-02.png as dice_02
import dice_02 from './images/dice-02.png';
// import images/dice-03.png as dice_03
import dice_03 from './images/dice-03.png';
// import images/dice-04.png as dice_04
import dice_04 from './images/dice-04.png';
// import images/dice-05.png as dice_05
import dice_05 from './images/dice-05.png';
// import images/dice-06.png as dice_06
import dice_06 from './images/dice-06.png';

// create react functional component called App
// that return a div with text of 'Hello React'
const App = () => {
  // create state called [player1Image, setPlayer1Image] set to dice_01
  const [player1Image, setPlayer1Image] = useState(dice_01);
  // create state called [player2Image, setPlayer2Image] set to dice_02
  const [player2Image, setPlayer2Image] = useState(dice_02);
  // create state called [player1score, setPlayer1score] set to 0
  const [player1score, setPlayer1score] = useState(0);
  // create state called [player2score, setPlayer2score] set to 0
  const [player2score, setPlayer2score] = useState(0);
  // create state called [result, setResult] set to ''
  const [result, setResult] = useState('');
  // create function called rollDice that console.log a random number between 1 and 6
  const rollDice = () => {
    //   create a variable randomNumber and set it to a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    // use setPlayer1score to set player1score to randomNumber
    setPlayer1score(randomNumber);
    //  if randomNumber is 1
    if (randomNumber === 1) {
      // use setPlayer1Image to set player1Image to dice_01
      setPlayer1Image(dice_01);
    }
    // else if randomNumber is 2
    else if (randomNumber === 2) {
      // use setPlayer1Image to set player1Image to dice_02
      setPlayer1Image(dice_02);
    }
    // else if randomNumber is 3
    else if (randomNumber === 3) {
      // use setPlayer1Image to set player1Image to dice_03
      setPlayer1Image(dice_03);
    }
    // else if randomNumber is 4
    else if (randomNumber === 4) {
      // use setPlayer1Image to set player1Image to dice_04
      setPlayer1Image(dice_04);
    }
    // else if randomNumber is 5
    else if (randomNumber === 5) {
      // use setPlayer1Image to set player1Image to dice_05
      setPlayer1Image(dice_05);
    }
    // else if randomNumber is 6
    else if (randomNumber === 6) {
      // use setPlayer1Image to set player1Image to dice_06
      setPlayer1Image(dice_06);
    }
    //  create a variable randomNumber2 and set it to a random number between 1 and 6
    const randomNumber2 = Math.floor(Math.random() * 6 + 1);
    // use setPlayer2score to set player2score to randomNumber2
    setPlayer2score(randomNumber2);
    // if randomNumber2 is 1
    if (randomNumber2 === 1) {
      // use setPlayer2Image to set player2Image to dice_01
      setPlayer2Image(dice_01);
    }
    // else if randomNumber2 is 2
    else if (randomNumber2 === 2) {
      // use setPlayer2Image to set player2Image to dice_02
      setPlayer2Image(dice_02);
    }
    // else if randomNumber2 is 3
    else if (randomNumber2 === 3) {
      // use setPlayer2Image to set player2Image to dice_03
      setPlayer2Image(dice_03);
    }
    // else if randomNumber2 is 4
    else if (randomNumber2 === 4) {
      // use setPlayer2Image to set player2Image to dice_04
      setPlayer2Image(dice_04);
    }
    // else if randomNumber2 is 5
    else if (randomNumber2 === 5) {
      // use setPlayer2Image to set player2Image to dice_05
      setPlayer2Image(dice_05);
    }
    // else if randomNumber2 is 6
    else if (randomNumber2 === 6) {
      // use setPlayer2Image to set player2Image to dice_06
      setPlayer2Image(dice_06);
    }
    // if randomNumber is greater than randomNumber2
    if (randomNumber > randomNumber2) {
      // use setResult to set result to 'Player 1 Wins!'
      setResult('Player 1 Wins!');
    }
    // else if randomNumber is less than randomNumber2
    else if (randomNumber < randomNumber2) {
      // use setResult to set result to 'Player 2 Wins!'
      setResult('Player 2 Wins!');
    }
    // else if randomNumber is equal to randomNumber2
    else if (randomNumber === randomNumber2) {
      // use setResult to set result to 'Draw!'
      setResult('Draw!');
    }
  };

  return (
    //   use MainApp as styled component
    <MainApp>
      {/* create a div with id of player 1 */}
      <div id='player1'>
        {/* create h1 with id of player1score and text of 0 */}
        <h1 id='player1score'>{player1score}</h1>
        {/* create iamge with id of player1image and src {dice_01} */}
        <img id='player1image' src={player1Image} alt='dice' />
      </div>
      {/* create button onClick of {rollDice()} and text of Roll Dice */}
      <button onClick={rollDice}>Roll Dice</button>
      {/* create another div with id of player 2 */}
      <div id='player2'>
        {/* create h1 with id of player2score and text of 0 */}
        <h1 id='player2score'>{player2score}</h1>
        {/* create image with id of player2image and src {dice_01} */}
        <img id='player2image' src={player2Image} alt='dice' />
      </div>
      {/* create h1 and set to {result} */}
      <h1>{result}</h1>
    </MainApp>
  );
};

// create MainApp component as styled component with div
const MainApp = styled.div`
  /* set font family to Arial, sans-serif */
  font-family: 'Arial', sans-serif;
  /* set img styles */
  img {
    /* set width to 125px */
    width: 125px;
  }
`;

// export App
export default App;
