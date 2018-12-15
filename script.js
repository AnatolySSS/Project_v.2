var top;
var left;
var count = 0;

function jump() {

  jumpTop();
  jumpLeft();
  count++;
  document.getElementById('number').innerHTML=count;
}

function jumpTop() {
  function getRandomInRangeTop(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  top = getRandomInRangeTop(5, 645) + "px";
  document.getElementById('circle').style.top = top;
}

function jumpLeft() {
  function getRandomInRangeLeft(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  left = getRandomInRangeLeft(5, 345) + "px";
  document.getElementById('circle').style.left = left;
}






function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  return {
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 10 * 1000); // for endless timer
initializeClock('seconds', deadline);
