$(document).ready(function() {



var searchBtn = $('#searchBtn');
searchBtn.click(function(event) {
event.preventDefault();
    if ($('#cityInput').val()) {
        $('#appendCity').append('<button class="citybtn">' + $('#cityInput').val() + '</button>').val($('#cityInput').val());
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + $('#cityInput').val() + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
                console.log(data)
              var lat = data[0].lat;
              var lon = data[0].lon;
              $('#lat').text(lat);
              $('#lon').text(lon);
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
            .then(response => response.json())
            .then(data => {
              var arr = [];
                arr.push(data)
                console.log(arr)
              var cityName = arr[0].name;
              var temp = arr[0].main.temp;
              var wind = arr[0].wind.speed;
              var humidity = arr[0].main.humidity;
              var icon = arr[0].weather[0].icon;
              $('#tempSpan').removeClass('invisible');
              $('#windSpan').removeClass('invisible');
              $('#humiditySpan').removeClass('invisible');
              $('#cityHeader').text(cityName);
              $('#temp').text(temp);
              $('#wind').text(wind);
              $('#humidity').text(humidity);
              $('#icon').addClass('src').attr("http://openweathermap.org/img/wn/" + icon + ".png");
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