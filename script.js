const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const response = document.getElementById('response');

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton() {
  const x = Math.floor(Math.random() * 300) - 150; // random shift
  const y = Math.floor(Math.random() * 300) - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.addEventListener('click', () => {
  response.innerHTML = "Yayy! You just made my day! 💖🎉";
  response.style.opacity = 1;
  confettiAnimation();
});

// Optional fun animation (basic confetti)
function confettiAnimation() {
  const emojis = ['💖', '🎉', '✨', '💫', '❤️'];
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-2vh';
    confetti.style.fontSize = '24px';
    confetti.style.animation = `fall ${2 + Math.random() * 3}s linear`;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}
