const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId = null;

stopButton.disabled = true;

startButton.addEventListener('click', startBackgroundColorChange);
stopButton.addEventListener('click', stopBackgroundColorChange);

function startBackgroundColorChange() {
  if (!intervalId) {
    startButton.disabled = true;
    stopButton.disabled = false;
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
}

function stopBackgroundColorChange() {
  if (intervalId) {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(intervalId);
    intervalId = null;
  }
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
