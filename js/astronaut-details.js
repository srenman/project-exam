const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://spacelaunchnow.me/api/3.3.0/astronaut/" + id;

async function getAstronautById() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    // Changing the HTML
    document.title = `Space youths | ${json.name}`;

    const profilePicture = document.querySelector("#astronaut-profile-img");
    profilePicture.src = json.profile_image;
    profilePicture.alt = json.name;

    const astronautName = document.querySelector("h1");
    astronautName.innerHTML = json.name;

    const date_of_birth = document.querySelector("#dob");
    date_of_birth.innerHTML = json.date_of_birth;

    // Make if statement
    const date_of_death = document.querySelector("#dod");
    date_of_death.innerHTML = json.date_of_death;

    const nationality = document.querySelector("#nationality");
    nationality.innerHTML = json.nationality;

    const agency = document.querySelector("#agency");
    agency.innerHTML = json.agency.name;

    const status = document.querySelector("#status");
    status.innerHTML = json.status.name;

    const bio = document.querySelector("#bio");
    bio.innerHTML = json.bio;
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

// function displayDetails(details) {
//   const detailsContainer = document.querySelector(".astronaut-details");
//   console.log(details);

//   newHTML = "<h1>TEST</h1>";

//   `
//  <section class="astronaut-details flex">
//        <div class="astronaut-profile-img equal-flex">
//          <img src="images/astronaut-white.png" alt="Profile Picture" />
//        </div>
//        <div class="equal-flex inner-details">
//          <h1>${details.name}</h1>
//          <div class="detail-attributes equal-flex">
//
//          </div>
//           <div class="detail-results equal-flex">
//             <ul>
//                  <li>${details.date_of_birth}</li>
//                  <li>${details.date_of_death}</li>
//                  <li>${details.nationality}</li>
//                  <li>${details.agency}</li>
//                  <li>${details.status}</li>
//              </ul>
//           </div>
//           <p>${details.bio}</p>
//         </div>
//       </section>`;
//   detailsContainer.innerHTML = newHTML;
// }
