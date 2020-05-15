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
