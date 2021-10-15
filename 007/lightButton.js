let box = document.getElementById('box')
let body = document.querySelector('#wrapper')
var i=1;

box.addEventListener('click', function() {
  if(i == 1) {
    darkMode()
    body.style.backgroundColor = '#222';
    i = 2;
  }
  else {
    lightMode()
    body.style.backgroundColor = "#555"
    i = 1;
  }
})



function darkMode() {
  anime({
    targets: '#dark',
    d: {
      value: "M68 38C68 54.5685 54.5685 68 38 68C21.4315 68 8 54.5685 8 38C8 21.4315 21.4315 8 38 8C18 32.5 43 58 68 38Z",
      duration: 100,
    },
    easing: 'linear' 
  })
}

function lightMode() {
  anime({
    targets: '#dark',
    d: {
      value: "M68 38C68 54.5685 54.5685 68 38 68C21.4315 68 8 54.5685 8 38C8 21.4315 21.4315 8 38 8C54.5685 8 68 21.4315 68 38Z",
      duration: 100,
    },
    easing: 'linear' 
  })
}