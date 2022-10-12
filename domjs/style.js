// -------------------
// Style for header
// -------------------
const styleDivHeader = document.getElementsByTagName('header')[0];
styleDivHeader.style.cssText = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`;

// -------------------
// Style for Buttons
// -------------------

const buttons = document.getElementsByTagName('button');
for (let button of buttons) {
  button.style.cssText = `
    width: 50px;
    height: 50px;
    color: white;
    text-align: center;
    font-size: 20px;
  `;

  if (button.id == 'button-minus') {
    button.style.cssText += `
      border: solid 1px;
      border-radius: 10px 0px 0px 10px;
      background-color: fireBrick;
    `;
  } else {
    button.style.cssText += `
      border: solid 1px;
      border-radius: 0px 10px 10px 0px;
      background-color: grey;
    `;
  }
}

// -------------------
// Style for Inputs
// -------------------

const input = document.getElementById('counter');
input.style.cssText = `
    width: 45px;
    height: 45px;
    border: none;
    text-align: center;
`;

// ----------------------
// Style for divs
// ----------------------
const styleDivPlayers = document.getElementById('teams');
styleDivPlayers.style.cssText = `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const styleDivTrophies = document.getElementById('trophies');
styleDivTrophies.style.cssText = `
  display: flex;
  align-items: center;
  justify-content: center;
`;