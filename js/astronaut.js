const url = "https://spacelaunchnow.me/api/3.3.0/astronaut/?limit=10";
let nextUrl = "";

// API Call

async function fetchAstronauts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    nextUrl = json.next;

    displayAstronauts(json);
  } catch (error) {
    console.log("error");
  } finally {
    console.log("The function is finished");
  }
}

fetchAstronauts();

// Display The Astronauts
function displayAstronauts(astronauts) {
  const astronautsArray = astronauts.results;

  const container = document.querySelector(".astronauts-container");

  let newHTML = "";

  for (let i = 0; i < astronautsArray.length; i++) {
    newHTML += `<div>
                    <a href="astronaut-details.html?id=${astronautsArray[i].id}"><h4 class="astronaut-name">${astronautsArray[i].name}</h4></a>
                </div>`;
  }
  container.innerHTML = newHTML;
}

// Show More Function
const showMoreBtn = document.querySelector("#show-more-button");

showMoreBtn.addEventListener("click", fetchMoreAstronauts);

async function fetchMoreAstronauts() {
  try {
    const response = await fetch(nextUrl);
    const json = await response.json();
    nextUrl = json.next;

    showMoreAstronauts(json);
  } catch (error) {
    console.log("error");
  } finally {
    console.log("The function is finished");
  }
}

function showMoreAstronauts(astronauts) {
  const astronautsArray = astronauts.results;

  const container = document.querySelector(".astronauts-container");

  let newHTML = document.querySelector(".astronauts-container").innerHTML;

  for (let i = 0; i < astronautsArray.length; i++) {
    newHTML += `<div>
                    <a href="astronaut-details.html?id=${astronautsArray[i].id}"><h4 class="astronaut-name">${astronautsArray[i].name}</h4></a>
                </div>`;
  }
  container.innerHTML = newHTML;
}
