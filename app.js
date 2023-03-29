const cols = document.querySelectorAll('.col');

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === 'space') {
    setRandomColors();
  }
});

document.addEventListener('click', (event) => {
  const type = event.target.dataset.type;
  
  if (type === 'lock') {
    const node = event.target.tagName.toLowerCase() === 'i'
      ? event.target
      : event.target.children[0];

      node.classList.toggle('fa-lock-open');
      node.classList.toggle('fa-lock');
  } else if (type === 'copy') {
    copyToClickBoard(event.target.textContent);
  }

});

function generateRandomColor() {
  const hexCodes = '0123456789ABCDEF';
  let colored = '';
  for (let i = 0; i < 6; i++) {
    colored += hexCodes[Math.floor(Math.random() * hexCodes.length)];
  }
  return '#' + colored;
}

function copyToClickBoard(text) {
  return navigator.clipboard.writeText(text)
}

function setRandomColors() {
  const colors = [];

  cols.forEach((col) => {
    const text = col.querySelector('h2');
    const button = col.querySelector('button');
    const isLocked = col.querySelector('i').classList.contains('fa-lock'); 
    const color = generateRandomColor();

    if(isLocked) {
      colors.push(text.textContent)
      return
    }

    colors.push(color);

    text.textContent = color;
    col.style.background = color;

    setTextColor(text, color);
    setTextColor(button, color);
  });

  updateColorsHash(colors);
}

function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
}

function updateColorsHash(colors = []) {
  document.location.hash = colors.toString();
}

setRandomColors();