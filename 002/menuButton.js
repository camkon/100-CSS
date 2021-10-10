var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var box = document.getElementById('box')

box.addEventListener('click',function() {
  if((one.className == 'line ') || (one.className == 'line closeOne')) {
    one.className = 'line openOne';
    two.className = 'line openTwo';
    three.className = 'line openThree';
    console.log('open');
  }
  else {
    one.className = 'line closeOne';
    two.className = 'line closeTwo';
    three.className = 'line closeThree';
    console.log('close');
  }
  console.log('here');
})


