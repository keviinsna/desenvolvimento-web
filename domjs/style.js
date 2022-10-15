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
    width: 65px;
    height: 65px;
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
      background-color: lightSlateGray;
    `;
  }
}

// -------------------
// Style for Inputs
// -------------------

const input = document.getElementById('counter');
input.style.cssText = `
    width: 65px;
    height: 65px;
    border: none;
    text-align: center;
`;

// ----------------------
// Style for divs
// ----------------------
const styleDivTeams = document.getElementById('teams');
styleDivTeams.style.cssText = `
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
