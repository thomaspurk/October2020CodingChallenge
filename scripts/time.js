// IANA Time Zones https://www.iana.org/time-zones
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
let clocks = [
  "America/New_York",
  "Europe/London",
  "Europe/Moscow",
  "Pacific/Tahiti",
  "Pacific/Fiji",
  "America/Phoenix"
];

let displayTime = function (args) {
  let divTime = document.getElementById("time");
  divTime.innerHTML = "";
  let curTime = new Date(Date.now());

  for (let i = 0; i < clocks.length; i++) {
    let divClock = document.createElement("div");
    divClock.classList.add("clock");
    let spanZone = document.createElement("div");
    let spanDigits = document.createElement("div");
    spanDigits.classList.add("digits");
    spanZone.innerHTML = clocks[i];
    spanDigits.innerHTML = curTime.toLocaleString("en-US", {
      timeZone: clocks[i]
    });
    divClock.append(...[spanZone, spanDigits]);
    divTime.appendChild(divClock);
  }

  window.requestAnimationFrame(displayTime);
};

window.requestAnimationFrame(displayTime);
