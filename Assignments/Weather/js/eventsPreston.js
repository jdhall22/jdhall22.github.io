const eventsURL = 'https://jdhall22.github.io/Assignments/Weather/Data/towndata.json';
const cards = document.querySelector(".events");

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
  
  let card = document.createElement("section");
  let event = document.createElement("p");
  //let town = document.createElement("p");
  event.textContent = `${towns[2, 6]}`;



  //town.innerHTML = `<strong>Year Founded:</strong> ${towns.yearFounded}<br> <strong>Population:</strong> ${towns.currentPopulation}<br> <strong>Rain Fall:</strong> ${towns.averageRainfall}`;

  

  card.appendChild(event);
  

  cards.appendChild(card);



}
