const requestURL = 'https://jdhall22.github.io/Assignments/Scooters/Data/info.json';
var data = document.querySelector(".information");

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const tours = jsonObject["tours"];
    tours.forEach(displayInfo);
  });

function displayInfo(tours) {
  
  if (tours.name == "Fish Haven") {
    let card = document.createElement("section");
    let event = document.createElement("p");
    //let town = document.createElement("p");
    event.textContent = `${tours.events}`;
  
    card.appendChild(event);
    data.appendChild(card);
  }

  else {
    
  }
  }