function UpdateTime () {
const CurrentTime = document.getElementById('currentTimeinUTC');
const now = new Date();
CurrentTime.textContent = now.toUTCString();
}


function UpdateDay() {
  const CurrentDay = document.getElementById('CurrentDay');
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  CurrentDay.textContent = days[now.getUTCDay()];
  }

  
UpdateDay();
UpdateTime();

setInterval(UpdateTime, 1000);





