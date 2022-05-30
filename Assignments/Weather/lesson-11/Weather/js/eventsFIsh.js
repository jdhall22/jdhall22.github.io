const eventsURL = 'https://jdhall22.github.io/Assignments/Weather/Data/towndata.json';
var data = document.querySelector(".events");

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    towns.forEach(displayCities);
  });

function displayCities(towns) {
  
  if (towns.name == "Fish Haven") {
    let card = document.createElement("section");
    let event = document.createElement("p");
    //let town = document.createElement("p");
    event.textContent = `${towns.events}`;
  
    card.appendChild(event);
    data.appendChild(card);
  }

  else {
    
  }
  }
