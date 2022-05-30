

/**display last update time */
const updatedDate = document.querySelector('#updatedDate')
updatedDate.textContent = ` ${document.lastModified}`;

/**menu toggle */
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/**Friday pancake banner*/
    var now  = new Date();       
	var banner = document.querySelector("#fridayBanner")
	
	var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

    var day = weekday[now.getDay()];


    if (day == "Friday") {
        banner.style.display = "inline";
    }
    else {
        banner.style.display = "none";
      }


/**5 day forcast */


!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

/**Windchill */


function buildWC () {
    var currentTemp = 49;
    var windSpeed = 8;
    
    let feelTemp = document.getElementById('feelTemp');

        let wc = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
        console.log(wc);

        wc = Math.floor(wc);

        wc = (wc > currentTemp) ? currentTemp : wc;

        console.log(wc);

        feelTemp.innerHTML = wc;

        document.querySelector('buildWC').textContent = feelTemp;
}

