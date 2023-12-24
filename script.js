/**
 * ` time
 */

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

/**
 *` date
 */

const month = document.querySelector(".month");
const day = document.querySelector(".day");
const year = document.querySelector(".year");

function setDate() {
  const now = new Date();

  const mm = now.getMonth();
  const dd = now.getDate();
  const yyyy = now.getFullYear();

  const hrs = now.getHours();
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  month.innerHTML = monthNames[mm];
  day.innerHTML = dd + ",";
  year.innerHTML = yyyy;

  if (hrs < 10) {
    hours.innerHTML = "0" + hrs;
  } else {
    hours.innerHTML = hrs;
  }

  if (mins < 10) {
    minutes.innerHTML = "0" + mins;
  } else {
    minutes.innerHTML = mins;
  }

  if (secs < 10) {
    seconds.innerHTML = "0" + secs;
  } else {
    seconds.innerHTML = secs;
  }
}

setInterval(setDate, 1000);
