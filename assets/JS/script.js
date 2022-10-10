$(document).ready(function() {


var searchBtn = $('#searchBtn');
searchBtn.click(function(event) {
event.preventDefault();
    if ($('#cityInput').val()) {
        $('#appendCity').append('<button class="citybtn">' + $('#cityInput').val() + '</button>').val($('#cityInput').val());
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + $('#cityInput').val() + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
              var lat = data[0].lat;
              var lon = data[0].lon;
              $('#lat').text(lat);
              $('#lon').text(lon);
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
              var arr = [];
                arr.push(data);
              var date = arr[0].dt;
              var formattedDate = moment.unix(date).format('MM/DD/YYYY');
              var cityName = arr[0].name;
              var temp = arr[0].main.temp - 273.15;
              var newTemp = Math.floor(temp * 1.8 + 32);
              var wind = arr[0].wind.speed;
              var humidity = arr[0].main.humidity;
              var icon = arr[0].weather[0].icon;
              $('.invisible').removeClass('invisible')
              $('#cityHeader').text(cityName + ' ' + formattedDate);
              $('#temp').text(newTemp);
              $('#wind').text(wind);
              $('#humidity').text(humidity);
              $('#icon').attr('src', "http://openweathermap.org/img/wn/" + icon + ".png");
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
              $('#five-day-header').removeClass('invisible');
              var arr2 = [];
              arr2.push(data); console.log(arr2)
              var dayOneDate = arr2[0].list[6].dt;
              var formattedDayOneDate = moment.unix(dayOneDate).format('MM/DD/YYYY');
              var dayOneTemp = arr2[0].list[6].main.temp - 273.15;
              var newDayOneTemp = Math.floor(dayOneTemp * 1.8 + 32);
              var dayOneWind = arr2[0].list[6].wind.speed;
              var dayOneHumidity = arr2[0].list[6].main.humidity;
              var dayOneIcon = arr2[0].list[6].weather[0].icon;
              $('#day-one-header').text(formattedDayOneDate);
              $('#day-one-temp').text(newDayOneTemp);
              $('#day-one-wind').text(dayOneWind);
              $('#day-one-humidity').text(dayOneHumidity);
              $('#day-one-icon').attr('src', "http://openweathermap.org/img/wn/" + dayOneIcon + ".png")
              var dayTwoDate = arr2[0].list[14].dt;
              var formattedDayTwoDate = moment.unix(dayTwoDate).format('MM/DD/YYYY');
              var dayTwoTemp = arr2[0].list[14].main.temp - 273.15;
              var newDayTwoTemp = Math.floor(dayTwoTemp * 1.8 + 32);
              var dayTwoWind = arr2[0].list[14].wind.speed;
              var dayTwoHumidity = arr2[0].list[14].main.humidity;
              var dayTwoIcon = arr2[0].list[14].weather[0].icon;
              $('#day-two-header').text(formattedDayTwoDate);
              $('#day-two-temp').text(newDayTwoTemp);
              $('#day-two-wind').text(dayTwoWind);
              $('#day-two-humidity').text(dayTwoHumidity);
              $('#day-two-icon').attr('src', "http://openweathermap.org/img/wn/" + dayTwoIcon + ".png")
              var dayThreeDate = arr2[0].list[22].dt;
              var formattedDayThreeDate = moment.unix(dayThreeDate).format('MM/DD/YYYY');
              var dayThreeTemp = arr2[0].list[22].main.temp - 273.15;
              var newDayThreeTemp = Math.floor(dayThreeTemp * 1.8 + 32);
              var dayThreeWind = arr2[0].list[22].wind.speed;
              var dayThreeHumidity = arr2[0].list[22].main.humidity;
              var dayThreeIcon = arr2[0].list[22].weather[0].icon;
              $('#day-three-header').text(formattedDayThreeDate);
              $('#day-three-temp').text(newDayThreeTemp);
              $('#day-three-wind').text(dayThreeWind);
              $('#day-three-humidity').text(dayThreeHumidity);
              $('#day-three-icon').attr('src', "http://openweathermap.org/img/wn/" + dayThreeIcon + ".png")
              var dayFourDate = arr2[0].list[30].dt;
              var formattedDayFourDate = moment.unix(dayFourDate).format('MM/DD/YYYY');
              var dayFourTemp = arr2[0].list[30].main.temp - 273.15;
              var newDayFourTemp = Math.floor(dayFourTemp * 1.8 + 32);
              var dayFourWind = arr2[0].list[30].wind.speed;
              var dayFourHumidity = arr2[0].list[30].main.humidity;
              var dayFourIcon = arr2[0].list[30].weather[0].icon;
              $('#day-four-header').text(formattedDayFourDate);
              $('#day-four-temp').text(newDayFourTemp);
              $('#day-four-wind').text(dayFourWind);
              $('#day-four-humidity').text(dayFourHumidity);
              $('#day-four-icon').attr('src', "http://openweathermap.org/img/wn/" + dayFourIcon + ".png")
              var dayFiveDate = arr2[0].list[38].dt;
              var formattedDayFiveDate = moment.unix(dayFiveDate).format('MM/DD/YYYY');
              var dayFiveTemp = arr2[0].list[38].main.temp - 273.15;
              var newDayFiveTemp = Math.floor(dayFiveTemp * 1.8 +32);
              var dayFiveWind = arr2[0].list[38].wind.speed;
              var dayFiveHumidity = arr2[0].list[38].main.humidity;
              var dayFiveIcon = arr2[0].list[38].weather[0].icon;
              $('#day-five-header').text(formattedDayFiveDate);
              $('#day-five-temp').text(newDayFiveTemp);
              $('#day-five-wind').text(dayFiveWind);
              $('#day-five-humidity').text(dayFiveHumidity);
              $('#day-five-icon').attr('src', "http://openweathermap.org/img/wn/" + dayFiveIcon + ".png")
              })
            });
        });
        $('#cityInput').val('');
    }
    $('#cityHeader').text($(this)[0].name);
})


$(document).on('click', '.citybtn', function () {
fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + $(this).text() + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
              var lat = data[0].lat;
              var lon = data[0].lon;
              $('#lat').text(lat);
              $('#lon').text(lon);
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
              var arr = [];
                arr.push(data);
              var date = arr[0].dt;
              var formattedDate = moment.unix(date).format('MM/DD/YYYY');
              var cityName = arr[0].name;
              var temp = arr[0].main.temp - 273.15;
              var newTemp = Math.floor(temp * 1.8 + 32);
              var humidity = arr[0].main.humidity;
              var icon = arr[0].weather[0].icon;
              $('.invisible').removeClass('invisible')
              $('#cityHeader').text(cityName + ' ' + formattedDate);
              $('#temp').text(newTemp);
              $('#wind').text(wind);
              $('#humidity').text(humidity);
              $('#icon').attr('src', "http://openweathermap.org/img/wn/" + icon + ".png");
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
              $('#five-day-header').removeClass('invisible');
              var arr2 = [];
              arr2.push(data);
              var dayOneDate = arr2[0].list[6].dt;
              var formattedDayOneDate = moment.unix(dayOneDate).format('MM/DD/YYYY');
              var dayOneTemp = arr2[0].list[6].main.temp - 273.15;
              var newDayOneTemp = Math.floor(dayOneTemp * 1.8 + 32);
              var dayOneWind = arr2[0].list[6].wind.speed;
              var dayOneHumidity = arr2[0].list[6].main.humidity;
              var dayOneIcon = arr2[0].list[6].weather[0].icon;
              $('#day-one-header').text(formattedDayOneDate);
              $('#day-one-temp').text(newDayOneTemp);
              $('#day-one-wind').text(dayOneWind);
              $('#day-one-humidity').text(dayOneHumidity);
              $('#day-one-icon').attr('src', "http://openweathermap.org/img/wn/" + dayOneIcon + ".png")
              var dayTwoDate = arr2[0].list[14].dt;
              var formattedDayTwoDate = moment.unix(dayTwoDate).format('MM/DD/YYYY');
              var dayTwoTemp = arr2[0].list[14].main.temp - 273.15;
              var newDayTwoTemp = Math.floor(dayTwoTemp * 1.8 + 32);
              var dayTwoWind = arr2[0].list[14].wind.speed;
              var dayTwoHumidity = arr2[0].list[14].main.humidity;
              var dayTwoIcon = arr2[0].list[14].weather[0].icon;
              $('#day-two-header').text(formattedDayTwoDate);
              $('#day-two-temp').text(newDayTwoTemp);
              $('#day-two-wind').text(dayTwoWind);
              $('#day-two-humidity').text(dayTwoHumidity);
              $('#day-two-icon').attr('src', "http://openweathermap.org/img/wn/" + dayTwoIcon + ".png")
              var dayThreeDate = arr2[0].list[22].dt;
              var formattedDayThreeDate = moment.unix(dayThreeDate).format('MM/DD/YYYY');
              var dayThreeTemp = arr2[0].list[22].main.temp - 273.15;
              var newDayThreeTemp = Math.floor(dayThreeTemp * 1.8 + 32);
              var dayThreeWind = arr2[0].list[22].wind.speed;
              var dayThreeHumidity = arr2[0].list[22].main.humidity;
              var dayThreeIcon = arr2[0].list[22].weather[0].icon;
              $('#day-three-header').text(formattedDayThreeDate);
              $('#day-three-temp').text(newDayThreeTemp);
              $('#day-three-wind').text(dayThreeWind);
              $('#day-three-humidity').text(dayThreeHumidity);
              $('#day-three-icon').attr('src', "http://openweathermap.org/img/wn/" + dayThreeIcon + ".png")
              var dayFourDate = arr2[0].list[30].dt;
              var formattedDayFourDate = moment.unix(dayFourDate).format('MM/DD/YYYY');
              var dayFourTemp = arr2[0].list[30].main.temp - 273.15;
              var newDayFourTemp = Math.floor(dayFourTemp * 1.8 + 32);
              var dayFourWind = arr2[0].list[30].wind.speed;
              var dayFourHumidity = arr2[0].list[30].main.humidity;
              var dayFourIcon = arr2[0].list[30].weather[0].icon;
              $('#day-four-header').text(formattedDayFourDate);
              $('#day-four-temp').text(newDayFourTemp);
              $('#day-four-wind').text(dayFourWind);
              $('#day-four-humidity').text(dayFourHumidity);
              $('#day-four-icon').attr('src', "http://openweathermap.org/img/wn/" + dayFourIcon + ".png")
              var dayFiveDate = arr2[0].list[38].dt;
              var formattedDayFiveDate = moment.unix(dayFiveDate).format('MM/DD/YYYY');
              var dayFiveTemp = arr2[0].list[38].main.temp - 273.15;
              var newDayFiveTemp = Math.floor(dayFiveTemp * 1.8 +32);
              var dayFiveWind = arr2[0].list[38].wind.speed;
              var dayFiveHumidity = arr2[0].list[38].main.humidity;
              var dayFiveIcon = arr2[0].list[38].weather[0].icon;
              $('#day-five-header').text(formattedDayFiveDate);
              $('#day-five-temp').text(newDayFiveTemp);
              $('#day-five-wind').text(dayFiveWind);
              $('#day-five-humidity').text(dayFiveHumidity);
              $('#day-five-icon').attr('src', "http://openweathermap.org/img/wn/" + dayFiveIcon + ".png")
              })
            });
        });
        $('#cityInput').val('');
        $('#cityHeader').text($(this)[0].name);
});





    





});