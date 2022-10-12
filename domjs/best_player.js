// ---------------
//      Data
// ---------------
const players = [
  {
    name: 'Lothar Matthäus',
    year: [1991],
    img: 'lothar-mattahus.jpg',
    quantity: 1,
    country: 'germany.png',
  },
  {
    name: 'Marco van Basten',
    year: [1992],
    img: 'marco-van-basten.png',
    quantity: 1,
    country: 'netherlands.png',
  },
  {
    name: 'Roberto Baggio',
    year: [1993],
    img: 'roberto-baggio.jpg',
    quantity: 1,
    country: 'italy.png',
  },
  {
    name: 'Romário',
    year: [1994],
    img: 'romario.jpg',
    quantity: 1,
    country: 'brazil.png',
  },
  {
    name: 'George Weah',
    year: [1995],
    img: 'george-weah.jpg',
    quantity: 1,
    country: 'liberia.png',
  },
  {
    name: 'Ronaldo',
    year: [1996, 1997, 2002],
    img: 'ronaldo.jpg',
    quantity: 3,
    country: 'brazil.png',
  },
  {
    name: 'Zinedine Zidane',
    year: [1998, 2000, 2003],
    img: 'zinedine-zidane.jpg',
    quantity: 3,
    country: 'france.png',
  },
  {
    name: 'Rivaldo',
    year: [1999],
    img: 'rivaldo.jpg',
    quantity: 1,
    country: 'brazil.png',
  },
  {
    name: 'Luís Figo',
    year: [2001],
    img: 'luis-figo.jpeg',
    quantity: 1,
    country: 'portugal.png',
  },
  {
    name: 'Ronaldinho',
    year: [2004, 2005],
    img: 'ronaldinho.jpg',
    quantity: 2,
    country: 'brazil.png',
  },
  {
    name: 'Fabio Cannavaro',
    year: [2006],
    img: 'fabio-cannavaro.jpg',
    quantity: 1,
    country: 'italy.png',
  },
  {
    name: 'Kaká',
    year: [2007],
    img: 'kaka.jpg',
    quantity: 1,
    country: 'brazil.png',
  },
  {
    name: 'Cristiano Ronaldo',
    year: [2008, 2013, 2014, 2016, 2017],
    img: 'cristiano-ronaldo.jpg',
    quantity: 5,
    country: 'portugal.png',
  },
  {
    name: 'Lionel Messi',
    year: [2009, 2010, 2011, 2012, 2015, 2019],
    img: 'lionel-messi.jpg',
    quantity: 6,
    country: 'argentina.png',
  },
  {
    name: 'Luka Modrić',
    year: [2018],
    img: 'luka-modric.jpg',
    quantity: 1,
    country: 'croatia.png',
  },
  {
    name: 'Robert Lewandowski',
    year: [2020, 2021],
    img: 'robert-lewandowski.jpg',
    quantity: 2,
    country: 'poland.png',
  },
];

// ---------------
//      Head
// ---------------

const icon = document.createElement('link');
icon.setAttribute('rel', 'icon');
icon.setAttribute('type', 'image/png');
icon.setAttribute('href', './imgs/fifa-award-the-best.png');

document.head.appendChild(icon);

// ---------------
//      Body
// ---------------

const divHeader = document.createElement('header');

const h1 = document.createElement('h1');
h1.append("The Best FIFA Men's Player");

const divCounter = document.createElement('div');
divCounter.className = 'counter';
const buttonMinus = createButton('button-minus', '-');
const counter = createCounter('counter');

const buttonPlus = createButton('button-plus', '+');
appendChildren(divCounter, [buttonMinus, counter, buttonPlus]);

const paragraph = document.createElement('p');
paragraph.append(`Soccer player this quantity of fifa the best trophies:`);
appendChildren(divHeader, [h1, divCounter, paragraph]);

document.body.appendChild(divHeader);

const divTrophies = document.body.appendChild(document.createElement('div'));
divTrophies.setAttribute('id', 'trophies');

const divPlayers = document.body.appendChild(document.createElement('div'));
divPlayers.setAttribute('id', 'players');

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
  imgTrophyElement.setAttribute('src', './imgs/fifa-award-the-best.png');
  imgTrophyElement.setAttribute('width', '10%');
  imgTrophyElement.setAttribute('height', '10%');

  return imgTrophyElement;
}

function removeImg(id) {
  const img = document.getElementById(id);
  if (img) img.remove(img);
}

function createImgPlayer(player) {
  const figure = document.createElement('figure');
  figure.setAttribute('id', player.name);

  const playerCountry = document.createElement('img');
  playerCountry.setAttribute('src', `./imgs/players/flags/${player.country}`);

  const figCaption = document.createElement('figCaption');
  figCaption.append(player.name);
  figCaption.append(playerCountry);
  figCaption.style.cssText = `
    display: flex;
    aling-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
  `;

  const imgPlayer = document.createElement('img');
  imgPlayer.setAttribute('src', `./imgs/players/${player.img}`);
  imgPlayer.setAttribute('width', '200px');
  imgPlayer.setAttribute('height', '200px');
  imgPlayer.setAttribute('name', player.name);
  imgPlayer.setAttribute('alt', player.name);
  imgPlayer.style.borderRadius = '10%';

  figure.appendChild(figCaption);
  figure.appendChild(imgPlayer);

  divPlayers.appendChild(figure);
}

buttonPlus.addEventListener('click', () => {
  let value = parseInt(document.getElementById('counter').value);
  if (value < 6) {
    value = value + 1;
    counter.setAttribute('value', `${value}`);
    divTrophies.appendChild(createImgTrophy(value));
    hidePlayers(value);
    showPlayers(value);
  }
});

buttonMinus.addEventListener('click', () => {
  let value = parseInt(document.getElementById('counter').value);
  if (value > 0) {
    removeImg(`trophy-${value}`);
    value = value - 1;
    counter.setAttribute('value', `${value}`);
    hidePlayers(value);
    showPlayers(value);
  }
});

function showPlayers(quantityTrophies) {
  const playersFiltered = players.filter(
    (player) => player.quantity === quantityTrophies
  );

  playersFiltered.map((player) => createImgPlayer(player));
}

function hidePlayers(quantityTrophies) {
  const playersFiltered = players.filter(
    (player) => player.quantity !== quantityTrophies
  );

  playersFiltered.map((player) => removeImg(player.name));
}

function appendChildren(parent, children) {
  children.map((child) => parent.appendChild(child));
}
