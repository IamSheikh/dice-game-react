// import React
import React from 'react';
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
  // create function called rollDice that console.log a random number between 1 and 6
  const rollDice = () => {
    //   create a variable randomNumber and set it to a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    // create if statement that checks if randomNumber is equal to 1
    if (randomNumber === 1) {
      // get element by id player1image and set the src to dice_01
      document.getElementById('player1image').src = dice_01;
    }
    // else if randomNumber is equal to 2
    else if (randomNumber === 2) {
      // get elemnt by id player1image and set the src to dice_02
      document.getElementById('player1image').src = dice_02;
    }
    // else if randomNumber is equal to 3
    else if (randomNumber === 3) {
      // get element by id player1image and set the src to dice_04
      document.getElementById('player1image').src = dice_04;
    }
    // else if randomNumer is equal to 4
    else if (randomNumber === 4) {
      // get element by id player1image and set the src to dice_05
      document.getElementById('player1image').src = dice_05;
    }
  };

  return (
    //   use MainApp as styled component
    <MainApp>
      {/* create a div with id of player 1 */}
      <div id='player1'>
        {/* create h1 with id of player1number and text of 0 */}
        <h1 id='player1number'>0</h1>
        {/* create iamge with id of player1image and src {dice_01} */}
        <img id='player1image' src={dice_01} alt='dice' />
      </div>
      {/* create button onClick of {rollDice()} and text of Roll Dice */}
      <button onClick={rollDice}>Roll Dice</button>
      {/* create another div with id of player 2 */}
      <div id='player2'>
        {/* create h1 with id of player2number and text of 0 */}
        <h1 id='player2number'>0</h1>
        {/* create image with id of player2image and src {dice_01} */}
        <img id='player2image' src={dice_01} alt='dice' />
      </div>
      {/* create h1 with id of result */}
      <h1 id='result'></h1>
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
