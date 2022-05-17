const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const cards = document.querySelector(".cards");

fetch(requestURL)
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
    let name = document.createElement("h2");
    let picture = document.createElement("img");
 
    let town = document.createElement("p");
    let motto = document.createElement("p");

    name.textContent = `${towns.name}`;
    picture.setAttribute("src", towns.photo);
    motto.textContent = `${towns.motto}`;

    if (towns.name == "Preston") {
        picture.setAttribute(
        "alt",
        `Photo of ${towns.name}`
        );
    } 
    else if (towns.name == "Soda Springs") {
        picture.setAttribute(
        "alt",
        `Picture of ${towns.name}`
        );
    } 
    else if (towns.name == "Fish Haven") {
        picture.setAttribute(
        "alt",
        `Picture of ${towns.name}`
        );
    } 
    else {
        picture.setAttribute(
        "alt",
        `Picture of error`
        );
  }
  picture.setAttribute("loading", "lazy");

  town.innerHTML = `<strong>Year Founded:</strong> ${towns.yearFounded}<br> <strong>Population:</strong> ${towns.currentPopulation}<br> <strong>Rain Fall:</strong> ${towns.averageRainfall}`;

  
  card.appendChild(name);
  card.appendChild(motto)
  card.appendChild(town);
  card.appendChild(picture);

  cards.appendChild(card);

}
