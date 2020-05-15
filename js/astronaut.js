const url = "https://spacelaunchnow.me/api/3.3.0/astronaut/?limit=24";

// API Call
async function fetchAstronauts() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    displayAstronauts(json);
  } catch (error) {
    console.log("error");
  } finally {
    console.log("The function is finished");
  }
}

fetchAstronauts();

// Display The Results
function displayAstronauts(astronauts) {
  const astronautsArray = astronauts.results;
  console.log(astronautsArray);

  const container = document.querySelector(".astronauts-container");

  let newHTML = "";

  for (let i = 0; i < astronautsArray.length; i++) {
    newHTML += `<div>
                    <a href="astronaut-details.html?id=${astronautsArray[i].id}"><h4 class="astronaut-name">${astronautsArray[i].name}</h4></a>
                </div>`;
  }
  container.innerHTML = newHTML;
}

// Show More
