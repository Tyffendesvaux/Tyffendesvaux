// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'chaton_enerve.jpeg') {
    myImage.setAttribute ('src','chaton_enerve.jpeg');
  } else {
    myImage.setAttribute ('src','chaton_enerve.jpeg');
  }
}

// Nom du voyageur

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Quel est le nom de ton chat ?');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Le plus beau des chats '
}}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Le plus beau des chats ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
