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
    img: '',
    quantity: 1,
  },
  {
    name: 'George Weah',
    year: [1995],
    img: '',
    quantity: 1,
  },
  {
    name: 'Ronaldo',
    year: [1996, 1997, 2002],
    img: '',
    quantity: 3,
  },
  {
    name: 'Zinedine Zidane',
    year: [1998, 2000, 2003],
    img: '',
    quantity: 3,
  },
  {
    name: 'Rivaldo',
    year: [1999],
    img: '',
    quantity: 1,
  },
  {
    name: 'Luís Figo',
    year: [2001],
    img: '',
    quantity: 1,
  },
  {
    name: 'Ronaldinho',
    year: [2004, 2005],
    img: '',
    quantity: 2,
  },
  {
    name: 'Fabio Cannavaro',
    year: [2006],
    img: '',
    quantity: 1,
  },
  {
    name: 'Kaká',
    year: [2007],
    img: '',
    quantity: 1,
  },
  {
    name: 'Cristiano Ronaldo',
    year: [2008, 2013, 2014, 2016, 2017],
    img: '',
    quantity: 5,
  },
  {
    name: 'Lionel Messi',
    year: [2009, 2010, 2011, 2012, 2015, 2019],
    img: '',
    quantity: 6,
  },
  {
    name: 'Luka Modrić',
    year: [2018],
    img: '',
    quantity: 1,
  },
  {
    name: 'Robert Lewandowski',
    year: [2020, 2021],
    img: '',
    quantity: 2,
  },
];

const buttonMinus = createButton('button-minus', '-');
const counter = createCounter('counter');
const buttonPlus = createButton('button-plus', '+');

const divTrophies = body.appendChild(document.createElement('div'));
divTrophies.setAttribute('id', 'trophies');

const divPlayers = body.appendChild(document.createElement('div'));
divPlayers.setAttribute('id', 'players');

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

function createImgPlayer(player) {
  const imgPlayer = document.createElement('img');
  imgPlayer.setAttribute('src', `./imgs/${player.img}`);
  imgPlayer.setAttribute('width', '150px');
  imgPlayer.setAttribute('height', '150px');

  imgPlayer.style.borderRadius = '10%';
  imgPlayer.style.padding = '10px';

  divPlayers.appendChild(imgPlayer);
}

function removeImgTrophy(id) {
  const img = document.getElementById(id);
  if (img) img.remove(img);
}

buttonPlus.addEventListener('click', () => {
  let value = parseInt(document.getElementById('counter').value);
  if (value < 6) {
    value = value + 1;
    counter.setAttribute('value', `${value}`);
    divTrophies.appendChild(createImgTrophy(value));
    showPlayers(value);
  }
});

buttonMinus.addEventListener('click', () => {
  let value = parseInt(document.getElementById('counter').value);
  if (value > 0) {
    removeImgTrophy(`trophy-${value}`);
    value = value - 1;
    counter.setAttribute('value', `${value}`);
    showPlayers(value);
  }
});

function showPlayers(quantityTrophies) {
  const playersFiltered = players.filter(
    (player) => player.quantity == quantityTrophies
  );

  playersFiltered.map((player) => createImgPlayer(player));
}
