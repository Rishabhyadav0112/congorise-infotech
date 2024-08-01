let interval; 

window.onload = () => {
  document.querySelector('#calculate').onclick = calculate;
  document.querySelector('#stop').onclick = stopTimer;
  document.querySelector('#reset').onclick = reset;
};

function calculate() {
  const date = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;

  if (!date || !time) {
    alert("Please enter both date and time.");
    return;
  }

  const endTime = new Date(`${date}T${time}:00`);
  
  if (interval) {
    clearInterval(interval); 
  }

  interval = setInterval(() => calculateTime(endTime), 1000);
}

function calculateTime(endTime) {
  const currentTime = new Date();
  const timeLeft = (endTime - currentTime) / 1000;

  const days = document.querySelector('#Countdown-days');
  const hours = document.querySelector('#Countdown-hours');
  const minutes = document.querySelector('#Countdown-minutes');
  const seconds = document.querySelector('#Countdown-seconds');

  if (timeLeft > 0) {
    days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
    hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
    minutes.innerText = Math.floor((timeLeft / 60) % 60);
    seconds.innerText = Math.floor(timeLeft % 60);
  } else {
    clearInterval(interval);
    days.innerText = 0;
    hours.innerText = 0;
    minutes.innerText = 0;
    seconds.innerText = 0;
  }
}

function stopTimer() {
  if (interval) {
    clearInterval(interval);
  }
}

function reset() {
  if (interval) {
    clearInterval(interval);
  }
  document.querySelector('#Countdown-days').innerText = 0;
  document.querySelector('#Countdown-hours').innerText = 0;
  document.querySelector('#Countdown-minutes').innerText = 0;
  document.querySelector('#Countdown-seconds').innerText = 0;
}