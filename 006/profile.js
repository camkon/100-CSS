var dp = document.getElementById('dp');
var boOne = document.getElementById('boOne').style;
var boTwo = document.getElementById('boTwo').style;

dp.addEventListener('mouseover', function() {
  boOne.transform = "rotate(360deg)";
  boTwo.transform = "rotate(-360deg)";
})

dp.addEventListener('mouseout', function() {
  boOne.transform = "rotate(0deg)";
  boTwo.transform = "rotate(0deg)";
})