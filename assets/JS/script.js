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
                arr.push(data)
              var cityName = arr[0].name;
              var temp = arr[0].main.temp;
              var wind = arr[0].wind.speed;
              var humidity = arr[0].main.humidity;
              var icon = arr[0].weather[0].icon;
              $('.invisible').removeClass('invisible')
              $('#cityHeader').text(cityName);
              $('#temp').text(temp);
              $('#wind').text(wind);
              $('#humidity').text(humidity);
              $('#icon').attr('src', "http://openweathermap.org/img/wn/" + icon + ".png");
        fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
              $('#five-day-header').removeClass('invisible');
              var arr2 = [];
              arr2.push(data);
              console.log(arr2)
              var dayOneDate = Date(arr2[0].list[6].dt_text);
              var dayOneTemp = arr2[0].list[6].main.temp;
              var dayOneWind = arr2[0].list[6].wind.speed;
              var dayOneHumidity = arr2[0].list[6].main.humidity;
              $('#day-one-header').text(dayOneDate);
              $('#day-one-temp').text(dayOneTemp);
              $('#day-one-wind').text(dayOneWind);
              $('#day-one-humidity').text(dayOneHumidity);
              var dayTwoDate = Date(arr2[0].list[14].dt_text);
              var dayTwoTemp = arr2[0].list[14].main.temp;
              var dayTwoWind = arr2[0].list[14].wind.speed;
              var dayTwoHumidity = arr2[0].list[14].main.humidity;
              $('#day-two-header').text(dayTwoDate);
              $('#day-two-temp').text(dayTwoTemp);
              $('#day-two-wind').text(dayTwoWind);
              $('#day-two-humidity').text(dayTwoHumidity);
              var dayThreeDate = Date(arr2[0].list[22].dt_text);
              var dayThreeTemp = arr2[0].list[22].main.temp;
              var dayThreeWind = arr2[0].list[22].wind.speed;
              var dayThreeHumidity = arr2[0].list[22].main.humidity;
              $('#day-three-header').text(dayThreeDate);
              $('#day-three-temp').text(dayThreeTemp);
              $('#day-three-wind').text(dayThreeWind);
              $('#day-three-humidity').text(dayThreeHumidity);
              var dayFourDate = Date(arr2[0].list[30].dt_text);
              var dayFourTemp = arr2[0].list[30].main.temp;
              var dayFourWind = arr2[0].list[30].wind.speed;
              var dayFourHumidity = arr2[0].list[30].main.humidity;
              $('#day-four-header').text(dayFourDate);
              $('#day-four-temp').text(dayFourTemp);
              $('#day-four-wind').text(dayFourWind);
              $('#day-four-humidity').text(dayFourHumidity);
              var dayFiveDate = Date(arr2[0].list[38].dt_text);
              var dayFiveTemp = arr2[0].list[38].main.temp;
              var dayFiveWind = arr2[0].list[38].wind.speed;
              var dayFiveHumidity = arr2[0].list[38].main.humidity;
              $('#day-five-header').text(dayFiveDate);
              $('#day-five-temp').text(dayFiveTemp);
              $('#day-five-wind').text(dayFiveWind);
              $('#day-five-humidity').text(dayFiveHumidity);
              })
            });
        });
        $('#cityInput').val('');
    }
    $('#cityHeader').text($(this)[0].name);
})


$(document).on('click', '.citybtn', function() {
var btnText = $(this).text();
console.log(btnText);
})


    





});