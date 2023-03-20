const cols = document.querySelectorAll('.col');

function generateRandomColor () {
  // RGB
  // #FF0000 RED
  // #00FF00 GREEN
  // #0000FF BLUE

  const hexCodes = '0123456789ABCDEF';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
  } 
  return '#' + color;
}

function setRandomColors() {
  cols.forEach(function(col){
    col.style.background = generateRandomColor ();
  });
}

setRandomColors()