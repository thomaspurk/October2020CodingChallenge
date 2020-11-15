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
    let thisTime = curTime.toLocaleString("en-US", {
      timeZone: clocks[i]
    });
    let divClock = document.createElement("div");
    let spanZone = document.createElement("span");
    let spanDate = document.createElement("span");
    let spanDigits = document.createElement("span");
    divClock.classList.add("clock");
    spanDigits.classList.add("digits");
    spanZone.innerHTML = clocks[i];
    spanDigits.innerHTML = thisTime.split(",")[1];
    spanDate.innerHTML = thisTime.split(",")[0];
    divClock.append(...[spanZone, spanDate, spanDigits]);
    divTime.appendChild(divClock);
  }

  window.requestAnimationFrame(displayTime);
};

window.requestAnimationFrame(displayTime);
