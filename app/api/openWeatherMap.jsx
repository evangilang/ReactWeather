var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=43b09364c980263fabc6d858166e3ed1&units=imperial';

//
module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        console.log(requestUrl);


        return axios.get(requestUrl).then(function (res){
            if (res.data.cod && res.data.message) {
                console.log(res.data.message);
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message)
        });
    }
}