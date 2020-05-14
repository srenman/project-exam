const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://spacelaunchnow.me/api/3.3.0/astronaut/" + id;

async function getAstronautById() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    displayDetails(json);
    console.log(json);
  } catch (error) {
    const ifError = document.querySelector("#ifError");
    const astronautDetailsSection = document.querySelector(
      ".astronaut-details"
    );
    ifError.style.display = "block";
    astronautDetailsSection.style.display = "none";

    console.log("error");
  } finally {
    console.log("the function is done");
  }
}

getAstronautById();

function displayDetails(json) {
  document.title = `Space youths | ${json.name}`;

  const profilePicture = document.querySelector("#astronaut-profile-img");
  if (json.profile_image === null) {
    profilePicture.src = `./images/astronaut-white.png`;
  } else {
    profilePicture.src = json.profile_image;
  }
  profilePicture.alt = json.name;

  const astronautName = document.querySelector("h1");
  astronautName.innerHTML = json.name;

  const date_of_birth = document.querySelector("#dob");
  date_of_birth.innerHTML = json.date_of_birth;

  const date_of_death = document.querySelector("#dod");
  if (json.date_of_death === null) {
    date_of_death.innerHTML = `Still alive, thankfully!`;
  } else {
    date_of_death.innerHTML = json.date_of_death;
  }

  const nationality = document.querySelector("#nationality");
  nationality.innerHTML = json.nationality;

  const agency = document.querySelector("#agency");
  if (json.agency === null) {
    agency.innerHTML = `Unknown`;
  } else {
    agency.innerHTML = json.agency.name;
  }

  const status = document.querySelector("#status");
  status.innerHTML = json.status.name;

  const bio = document.querySelector("#bio");
  bio.innerHTML = json.bio;
}
