const buttons = document.getElementsByTagName('button');
for (let button of buttons) {
  button.style.cssText = `
    width: 50px;
    height: 50px;
    color: white;
    background-color: cornflowerBlue;
  `;

  if (button.id == 'button-minus') {
    button.style.cssText += `
        border: solid 1px;
        border-radius: 10px 0px 0px 10px;
        `;
  } else {
    button.style.cssText += `
        border: solid 1px;
        border-radius: 0px 10px 10px 0px;
    `;
  }
}

const input = document.getElementById('counter');
input.style.cssText = `
    width: 50px;
    height: 50px;
    border: none;
    text-align: center;
`;
