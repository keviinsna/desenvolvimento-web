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
// Style for FigCaptions
// ----------------------
