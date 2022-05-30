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
  
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let persons = document.createElement("p");
    let reservationHalfDay = document.createElement("p");
    let reservationFullDay = document.createElement("p");
    let walkHalfDay = document.createElement("p");
    let walkFullDay = document.createElement("p");

    name.textContent = `${tours.name}`;
    persons.textContent = `${tours.persons}`;
    reservationHalfDay.textContent = `${tours.reservationHalfDay}`;
    reservationFullDay.textContent = `${tours.reservationFullDay}`;
    walkHalfDay.textContent = `${tours.walkHalfDay}`;
    walkFullDay.textContent = `${tours.walkFullDay}`;
  
    card.appendChild(name);
    card.appendChild(persons);
    card.appendChild(reservationHalfDay);
    card.appendChild(reservationFullDay);
    card.appendChild(walkHalfDay);
    card.appendChild(walkFullDay);

    data.appendChild(card);

  }