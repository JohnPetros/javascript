"use strict";

const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const sounds = ["boom.wav", "clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "ride.wav", "snare.wav", "tink.wav", "tom.wav"];
const containerKeys = document.querySelector("#containerKeys");

const insertKeys = () => {
  for (let k = 0; k < keys.length; k++) {
    containerKeys.innerHTML += `<div id="${keys[k]}" class="key">${keys[k]}</div>`;
  }
};

insertKeys();

const active = (key) => document.getElementById(keys[key]).classList.add('active');

const desactive = (key) => {
  const keyActivated = document.getElementById(keys[key])
  keyActivated.addEventListener('transitionend', () => keyActivated.classList.remove('active'))
}

const pressKey = (event) => {
  let key;
  event.type == 'click' ? key = keys.indexOf(event.target.id) : key = keys.indexOf(event.key.toUpperCase())  
  let isKey = sounds[key];
  if(isKey){
    active(key);
    playSound(key);
    desactive(key);
  }
};

const playSound = (sound) => {
    const containerAudio = document.querySelector('#containerAudio');
    let audio = document.createElement('audio');
    audio.setAttribute('src', 'sounds/' + sounds[sound]);
    containerAudio.innerHTML = audio;
    audio.play();
  }

containerKeys.addEventListener('click', pressKey);
window.addEventListener('keydown', pressKey)