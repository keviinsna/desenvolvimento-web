// ---------------
//      Data
// ---------------
const players = [
  {
    name: 'Lothar Matthäus',
    year: [1991],
    img: 'lothar-mattahus.jpg',
    quantity: 1,
  },
  {
    name: 'Marco van Basten',
    year: [1992],
    img: 'marco-van-basten.png',
    quantity: 1,
  },
  {
    name: 'Roberto Baggio',
    year: [1993],
    img: 'roberto-baggio.jpg',
    quantity: 1,
  },
  {
    name: 'Romário',
    year: [1994],
    img: 'romario.jpg',
    quantity: 1,
  },
  {
    name: 'George Weah',
    year: [1995],
    img: 'george-weah.jpg',
    quantity: 1,
  },
  {
    name: 'Ronaldo',
    year: [1996, 1997, 2002],
    img: 'ronaldo.jpg',
    quantity: 3,
  },
  {
    name: 'Zinedine Zidane',
    year: [1998, 2000, 2003],
    img: 'zinedine-zidane.jpg',
    quantity: 3,
  },
  {
    name: 'Rivaldo',
    year: [1999],
    img: 'rivaldo.jpg',
    quantity: 1,
  },
  {
    name: 'Luís Figo',
    year: [2001],
    img: 'luis-figo.jpeg',
    quantity: 1,
  },
  {
    name: 'Ronaldinho',
    year: [2004, 2005],
    img: 'ronaldinho.jpg',
    quantity: 2,
  },
  {
    name: 'Fabio Cannavaro',
    year: [2006],
    img: 'fabio-cannavaro.jpg',
    quantity: 1,
  },
  {
    name: 'Kaká',
    year: [2007],
    img: 'kaka.jpg',
    quantity: 1,
  },
  {
    name: 'Cristiano Ronaldo',
    year: [2008, 2013, 2014, 2016, 2017],
    img: 'cristiano-ronaldo.jpg',
    quantity: 5,
  },
  {
    name: 'Lionel Messi',
    year: [2009, 2010, 2011, 2012, 2015, 2019],
    img: 'lionel-messi.jpg',
    quantity: 6,
  },
  {
    name: 'Luka Modrić',
    year: [2018],
    img: 'luka-modric.jpg',
    quantity: 1,
  },
  {
    name: 'Robert Lewandowski',
    year: [2020, 2021],
    img: 'robert-lewandowski.jpg',
    quantity: 2,
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

const h1 = document.createElement('h1');
h1.append("The Best FIFA Men's Player");

document.body.appendChild(h1);

const buttonMinus = createButton('button-minus', '-');
const counter = createCounter('counter');
const buttonPlus = createButton('button-plus', '+');

const paragraph = document.createElement('p');
paragraph.append(`Soccer player this quantity of fifa the best trophies:`);

const divTrophies = document.body.appendChild(document.createElement('div'));
divTrophies.setAttribute('id', 'trophies');

document.body.appendChild(paragraph);

const divPlayers = document.body.appendChild(document.createElement('div'));
divPlayers.setAttribute('id', 'players');
divPlayers.style.display = 'flex';
divPlayers.style.flexWrap = 'wrap';
divPlayers.style.justifyContent = 'space-evenly';

// ---------------
//   Functions
// ---------------

function createButton(id, text) {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'button');
  buttonElement.setAttribute('id', id);
  buttonElement.append(text);
  document.body.appendChild(buttonElement);

  return buttonElement;
}

function createCounter(id) {
  const counterElement = document.createElement('input');
  counterElement.setAttribute('id', id);
  counterElement.setAttribute('type', 'number');
  counterElement.setAttribute('value', '0');
  counterElement.readOnly = true;
  document.body.appendChild(counterElement);

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

  const figCaption = document.createElement('figCaption');
  figCaption.append(player.name);
  figCaption.style.textAlign = 'center';

  const imgPlayer = document.createElement('img');
  imgPlayer.setAttribute('src', `./imgs/${player.img}`);
  imgPlayer.setAttribute('width', '300px');
  imgPlayer.setAttribute('height', '300px');
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
