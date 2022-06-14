// Code to toggle the scrolling Ticker's movement.

// A pause button, it should appear when the animation is on.
const pauseSVG =
  '<svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="pause_icon" data-v-d13589b6="">' +
  '<rect width="40" height="40" fill="#fff" class="icon-background"></rect>' +
  '<path fill-rule="evenodd" clip-rule="evenodd" d="M19 14H16V26H19V14ZM24 14H21V26H24V14Z" fill="#f74802" class="icon-button"></path>' +
  "</svg>";

// A play button, it should appear when the animation is off.
const playSVG =
  '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="pause_icon" data-v-d13589b6="">' +
  '<rect width="40" height="40" fill="#fff" class="icon-background"></rect>' +
  '<path d="M14 22L20 16L14 10V22Z" fill="#f74802" class="icon-button"></path>' +
  "</svg>";

// Initializes the ticker. It is running by default.
const pausePlayDiv = document.querySelector(".pausePlay");
const ticker = document.querySelector(".scrollingTicker");
ticker.style.animationPlayState = "running";
let tickerRunning = ticker.style.animationPlayState === "running";
pausePlayDiv.innerHTML = pauseSVG;

// If the user prefers reduced motion, the ticker is automatically paused.
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
if (!mediaQuery || mediaQuery.matches) {
  toggleTickerPlay;
}

pausePlayDiv.addEventListener("click", toggleTickerPlay);

function toggleTickerPlay() {
  ticker.style.animationPlayState = tickerRunning ? "paused" : "running";
  tickerRunning = !tickerRunning;
  if (tickerRunning) {
    pausePlayDiv.innerHTML = pauseSVG;
  } else {
    pausePlayDiv.innerHTML = playSVG;
  }
}
