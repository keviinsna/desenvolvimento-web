document.getElementById('red-circle').onclick = function () {
  document.getElementById('red-circle').style.display = 'none';
};

document.getElementById('yellow-circle').onclick = function () {
  document.getElementById('yellow-circle').style.display = 'none';
};

document.getElementById('blue-circle').onclick = function () {
  document.getElementById('blue-circle').style.display = 'none';
};

// make all circles visible again.
window.onkeydown = function (event) {
  if (event.ctrlKey && event.key === 'Escape') {
    document.getElementById('red-circle').style.display = 'block';
    document.getElementById('yellow-circle').style.display = 'block';
    document.getElementById('blue-circle').style.display = 'block';
  }
};
