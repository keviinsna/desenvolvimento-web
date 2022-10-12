// ---------------
//      Data
// ---------------
const teams = [
  {
    name: 'Uruguay',
    year: [1930, 1950],
    img: 'uruguay.png',
    quantity: 2,
  },
  {
    name: 'Italy',
    year: [1934, 1938, 1982, 2006],
    img: 'italy.png',
    quantity: 4,
  },
  {
    name: 'Germany',
    year: [1954, 1974, 1990, 2014],
    img: 'Germany.png',
    quantity: 4,
  },
  {
    name: 'Brazil',
    year: [1958, 1962, 1970, 1994, 2002],
    img: 'brazil.png',
    quantity: 5,
  },
  {
    name: 'England',
    year: [1966],
    img: 'england.png',
    quantity: 1,
  },
  {
    name: 'Argentina',
    year: [1978, 1986],
    img: 'argentina.png',
    quantity: 2,
  },
  {
    name: 'France',
    year: [1998, 2018],
    img: 'france.png',
    quantity: 2,
  },
  {
    name: 'Spain',
    year: [2010],
    img: 'spain.png',
    quantity: 1,
  },
];

// ---------------
//      Head
// ---------------

const icon = document.createElement('link');
icon.setAttribute('rel', 'icon');
icon.setAttribute('type', 'image/png');
icon.setAttribute('href', './imgs/world-cup.png');

document.head.appendChild(icon);

// ---------------
//      Body
// ---------------

const divHeader = document.createElement('header');

const h1 = document.createElement('h1');
h1.append('FIFA World Cup');

const divCounter = document.createElement('div');
divCounter.className = 'counter';
const buttonMinus = createButton('button-minus', '-');
const counter = createCounter('counter');

const buttonPlus = createButton('button-plus', '+');
appendChildren(divCounter, [buttonMinus, counter, buttonPlus]);

const paragraph = document.createElement('p');
paragraph.append(`Teams with this quantity of world cup trophy:`);
appendChildren(divHeader, [h1, divCounter, paragraph]);

document.body.appendChild(divHeader);

const divTrophies = document.body.appendChild(document.createElement('div'));
divTrophies.setAttribute('id', 'trophies');

const divTeams = document.body.appendChild(document.createElement('div'));
divTeams.setAttribute('id', 'teams');

// ---------------
//   Functions
// ---------------

function createButton(id, text) {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'button');
  buttonElement.setAttribute('id', id);
  buttonElement.append(text);

  return buttonElement;
}

function createCounter(id) {
  const counterElement = document.createElement('input');
  counterElement.setAttribute('id', id);
  counterElement.setAttribute('type', 'text');
  counterElement.setAttribute('value', '0');
  counterElement.disabled = true;

  return counterElement;
}

function createImgTrophy(id) {
  const imgTrophyElement = document.createElement('img');
  imgTrophyElement.setAttribute('id', `trophy-${id}`);
  imgTrophyElement.setAttribute('src', './imgs/world-cup.png');
  imgTrophyElement.setAttribute('width', '12%');
  imgTrophyElement.setAttribute('height', '12%');

  return imgTrophyElement;
}

function removeImg(id) {
  const img = document.getElementById(id);
  if (img) img.remove(img);
}

function createImgTeam(team) {
  const figure = document.createElement('figure');
  figure.setAttribute('id', team.name);

  const figCaption = document.createElement('figCaption');
  figCaption.append(team.name);
  figCaption.style.cssText = `
    display: flex;
    aling-items: center;
    justify-content: center;
  `;

  const figSubCaption = document.createElement('figcaption');
  figSubCaption.style.cssText = `
    display: flex;
    aling-items: center;
    justify-content: center;
  `;
  figSubCaption.append(team.year.join(', '));

  const imgTeam = document.createElement('img');
  imgTeam.setAttribute('src', `./imgs/flags/${team.img}`);
  imgTeam.setAttribute('width', '200px');
  imgTeam.setAttribute('height', '200px');
  imgTeam.setAttribute('name', team.name);
  imgTeam.setAttribute('alt', team.name);
  imgTeam.style.borderRadius = '20%';

  figure.appendChild(figCaption);
  figure.appendChild(imgTeam);
  figure.appendChild(figSubCaption);

  divTeams.appendChild(figure);
}

buttonPlus.addEventListener('click', () => {
  let value = parseInt(document.getElementById('counter').value);
  if (value < 5) {
    value = value + 1;
    counter.setAttribute('value', `${value}`);
    divTrophies.appendChild(createImgTrophy(value));
    hideTeam(value);
    showTeam(value);
  }
});

buttonMinus.addEventListener('click', () => {
  let value = parseInt(document.getElementById('counter').value);
  if (value > 0) {
    removeImg(`trophy-${value}`);
    value = value - 1;
    counter.setAttribute('value', `${value}`);
    hideTeam(value);
    showTeam(value);
  }
});

function showTeam(quantityTrophies) {
  const teamsFiltered = teams.filter(
    (team) => team.quantity === quantityTrophies
  );

  teamsFiltered.map((team) => createImgTeam(team));
}

function hideTeam(quantityTrophies) {
  const teamsFiltered = teams.filter(
    (team) => team.quantity !== quantityTrophies
  );

  teamsFiltered.map((team) => removeImg(team.name));
}

function appendChildren(parent, children) {
  children.map((child) => parent.appendChild(child));
}
