const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const clock = setInterval(() => {
  let dateToday = new Date();
  let hour = dateToday.getHours();
  let minute = dateToday.getMinutes();
  let second = dateToday.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  hours.textContent = hour;
  minutes.textContent = minute;
  seconds.textContent = second;
});
