// Loader
window.onload = function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};

// Countdown Timer
const weddingDate = new Date("December 2, 2026 18:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (document.getElementById("days")) {
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "<h2>Wedding Day is Here! ❤️</h2>";
  }
}, 1000);

// Music Button
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (musicBtn && music) {
  musicBtn.onclick = function () {
    if (music.paused) {
      music.play();
      musicBtn.innerHTML = "🔊";
    } else {
      music.pause();
      musicBtn.innerHTML = "🎵";
    }
  };
}
