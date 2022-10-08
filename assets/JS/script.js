$(document).ready(function() {



var button = $('.btn');



button.click(function () {


console.log(inputValue)










fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + $('#city').val() + '&appid=a32ee3008dc5ad65e11f2b980a7a6054')
    .then(response => response.json())
    .then(data => console.log(data));

})
// fetch('https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=a32ee3008dc5ad65e11f2b980a7a6054')
//     .then((response) => response.json())
//     console.log(response)
    





});