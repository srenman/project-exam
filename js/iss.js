// API Call
const url = "http://api.open-notify.org/iss-now.json";

async function fetchPosition() {
  const response = await fetch(url);
  const json = await response.json();

  let longitude = json.iss_position.longitude;
  let latitude = json.iss_position.latitude;

  let newCords = [longitude, latitude];

  displayMap(newCords);
  updateMap(newCords);

  // console.log("long", longitude);
  // console.log("lat", latitude);
  console.log(newCords);
}

//fetchPosition();

setInterval(fetchPosition, 4000);

// MAP
mapboxgl.accessToken =
  "pk.eyJ1Ijoic3Jlbm1hbiIsImEiOiJja2FjdDA1ZDYwMnlmMnNxcGNhc3g4NDkwIn0.fmf9Fr1FTzfgtKrKB0Yg2g";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [37.41, 8.82],
  zoom: 1,
});

//map.on("load", displayMap(newCords));

function displayMap(newCords) {
  // Vector to map
  map.loadImage(
    "https://i.ibb.co/34vr09H/international-space-station-154273-640.png",
    function (error, image) {
      if (error) throw error;
      map.addImage("iss-icon", image);

      map.addSource("point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [newCords],
              },
            },
          ],
        },
      });

      map.addLayer({
        id: "points",
        type: "symbol",
        source: "point",
        layout: {
          "icon-image": "iss-icon",
          "icon-size": 0.09,
        },
      });
    }
  );
}

// Update Map
function updateMap(newCords) {
  map.getSource("point", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: newCords,
          },
        },
      ],
    },
  });
}
