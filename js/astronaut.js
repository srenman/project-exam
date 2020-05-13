const url = "https://spacelaunchnow.me/api/3.3.0/astronaut/?limit=24";

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

function displayAstronauts(astronauts) {
  const astronautsArray = astronauts.results;
  console.log(astronautsArray);

  const container = document.querySelector(".astronauts-container");

  let newHTML = "";

  for (let i = 0; i < astronautsArray.length; i++) {
    console.log(astronautsArray[i].name);
    newHTML += `<div><h4>${astronautsArray[i].name}</h4></div>`;
  }
  container.innerHTML = newHTML;
}
