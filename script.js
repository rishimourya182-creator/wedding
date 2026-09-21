/* ==========================================================================
   ROYAL MAHAL WEDDING INVITATION - INTERACTIVE LOGIC
   ========================================================================== */

var music = document.getElementById("bg-music");
var audioBtn = document.getElementById("audio-control");
var isPlaying = false;

function openPalaceGate() {
  document.getElementById("door-l").classList.add("open-left");
  document.getElementById("door-r").classList.add("open-right");
  document.getElementById("badge").style.display = "none";

  setTimeout(function() {
    document.getElementById("palace-gate").style.display = "none";
    document.getElementById("main-mahal").style.display = "block";
    audioBtn.style.display = "flex";
  }, 1200);

  // Play audio on opening gate
  music.play().then(function() {
    isPlaying = true;
    audioBtn.innerText = "🎵";
  }).catch(function(e) {
    isPlaying = false;
    audioBtn.innerText = "🔇";
  });
}

function toggleAudio() {
  if (isPlaying) {
    music.pause();
    audioBtn.innerText = "🔇";
  } else {
    music.play();
    audioBtn.innerText = "🎵";
  }
  isPlaying = !isPlaying;
}

// Countdown Timer Setup
var weddingDate = new Date("December 2, 2026 18:00:00").getTime();

var countdownTimer = setInterval(function() {
  var now = new Date().getTime();
  var gap = weddingDate - now;

  if (gap <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown-wrapper").innerHTML = "<h3 style='color:#f7d070; width:100%;'>The Royal Day is Here! 🎉</h3>";
    return;
  }

  document.getElementById("days").innerText = Math.floor(gap / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((gap % (1000 * 60)) / 1000);
}, 1000);

// Generate Golden Sparks
for (let i = 0; i < 25; i++) {
  let spark = document.createElement("div");
  spark.className = "spark";
  spark.style.left = Math.random() * 100 + "vw";
  spark.style.animationDuration = (4 + Math.random() * 5) + "s";
  spark.style.animationDelay = Math.random() * 5 + "s";
  document.body.appendChild(spark);
}
