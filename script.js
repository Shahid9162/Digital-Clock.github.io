function time() {
  let clock = new Date();
  let a = clock.getHours();
  let b = clock.getMinutes();
  let c = clock.getSeconds();
  let x = clock.getFullYear();

  let hours = document.querySelector("#hrs");
  if (a > 12) {
    a -= 12;
  }
  if (a < 10) {
    a = "0" + a;
  }
  hours.innerHTML = a;

  let minutes = document.querySelector("#mins");
  if (b < 10) {
    b = "0" + b;
  }
  minutes.innerHTML = b;

  let seconds = document.querySelector("#sec");
  if (c < 10) {
    c = "0" + c;
  }
  seconds.innerHTML = c;

  let curYear = document.querySelector("#year");
  curYear.innerHTML = x;
}

setInterval(time, 1000);
