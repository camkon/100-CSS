var nav = document.getElementById('nav');
var btn = document.querySelectorAll('#topnav span');
var hero = document.getElementById('heroImage');

btn.forEach(i => {
  i.addEventListener('click',startAnime)
});

function startAnime() {
  hero.style.width = '60vw';
  hero.style.left = '40%';
  hero.style.backgroundPositionX = 'center';
  nav.style.height = '100vh';
}

