let audio = document.getElementById("BGM");

function playAudio() {
  audio.play();
};

function pauseAudio() {
  audio.pause();
};
const btn = document.getElementById("myBtn");

function toggleOpacity(next) {
  element.classList.toggle("fadedClick");
};
function startAnim(container) {
  container.querySelectorAll('.item').forEach(item => {
    item.classList.add('fadeIn');
  });
}
// function showItem() {
//   document.querySelector('.item').classList.add('show');
// }

// function hideItem() {
//   document.querySelector('.item').classList.remove('show');
// }
