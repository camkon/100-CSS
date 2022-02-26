var nav = document.getElementById('nav').style;
var btn = document.querySelectorAll('#topnav span');
var hero = document.getElementById('heroImage').style;
var slide = document.getElementById('slide').style;
var flag = 1;


btn.forEach(i => {
  i.addEventListener('click', function() {
    if (flag == 1) {startAnime()}
    else {backAnime()}
  })
});


function startAnime() {
  flag = 2
  hero.width = '60vw';
  hero.left = '40%';

  //nav height
  anime({
    targets: '#nav',
    height: '100%',
    duration: 700,
    easing: 'easeInOutQuad',
  });

  anime({
    targets: '#slide',
    left: {
      value: '2rem',
      duration: 700, 
    },
    opacity: {
      value: 1,
      duration: 500,
    },
    delay: 800,
    easing: 'easeInOutQuad',
  });
}


//close
function backAnime() {
  flag = 1;
  hero.width = '100vw';
  hero.left = '0';

  //nav height
  anime({
    targets: '#nav',
    height: '20vh',
    duration: 700,
    easing: 'easeInOutQuad',
  });

  anime({
    targets: '#slide',
    left: {
      value: '30%',
      duration: 700, 
    },
    opacity: {
      value: 0,
      duration: 500,
    },
    easing: 'linear',
  });
}