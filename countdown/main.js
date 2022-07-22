"use strict";

const formatTime = (time) => `0${time}`.slice(-2);

const displayTime = (time) => {
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const days = document.getElementById('days');

    const amountOfSeconds = time % 60;
    const amountOfMinutes = Math.floor((time % (60 * 60)) / 60);
    const amountOfHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const amountOfDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = formatTime(amountOfSeconds);
    minutes.textContent = formatTime(amountOfMinutes);
    hours.textContent = formatTime(amountOfHours);
    days.textContent = amountOfDays;
}

const countdown = (time) => {
  const stopCounting = () => clearInterval(timer);
  const count = () => {
    if (time === 0) {
      stopCounting();
    }
    displayTime(time)
    time--;
  };
  const timer = setInterval(count, 1000);
};

const timeToEvent = () => {
    const dateOfEvent = new Date("2022-12-31T23:59:59");
    const today = Date.now();
    return Math.floor((dateOfEvent - today) / 1000);
  };
  
  countdown(timeToEvent());
