var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var easyButton = document.getElementById('easyBtn');
var hardButton = document.getElementById('hardBtn');

easyButton.addEventListener('click', function() {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardButton.addEventListener('click', function() {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }
});

resetButton.addEventListener('click', function() {
  numSquares = numSquares;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  h1.style.backgroundColor = '#232323';
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < numSquares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener('click', function() {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      resetButton.textContent = 'Play Again?';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try again';
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(numSquares) {
  var arr = [];
  for (var i = 0; i < numSquares; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${b}, ${g})`;
}
