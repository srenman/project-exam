// LOADING EFFECTS

const showFirst = document.querySelector(".show1");
const showSecond = document.querySelector(".show2");
const showThird = document.querySelector(".show3");
const showFourth = document.querySelector(".show4");

function loadFirst() {
  showFirst.classList.add("transition");
}

function loadSecond() {
  showSecond.classList.add("transition");
}

function loadThird() {
  showThird.classList.add("transition");
}
function loadFourth() {
  showFourth.classList.add("transition");
}

setTimeout(loadFirst, 500);
setTimeout(loadSecond, 2000);
setTimeout(loadThird, 3200);
setTimeout(loadFourth, 3200);

// API CALL

const url = "http://api.open-notify.org/astros.json";

async function fetchApi() {
  const response = await fetch(url);
  const json = await response.json();

  howMany(json);
  theyAre(json);

  console.log(json);
}

fetchApi();

function howMany(json) {
  const howManyPeople = document.querySelector("#howMany");

  howManyPeople.innerHTML = `Right now there are ${json.number} people in space`;
  console.log(json.number);
}
function theyAre(json) {
  const people = json.people;
  const displayNames = document.querySelector("#who");

  let newHTML = "";

  for (let i = 0; i < people.length; i++) {
    newHTML += `<h4>${people[i].name}</h4>`;
    console.log(people[i].name);
  }
  displayNames.innerHTML = newHTML;
}
