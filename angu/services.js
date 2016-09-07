//SERVICE
weatherApp.service('cityService', function() {
    this.city = 'New Delhi';
    
});


weatherApp.service('weatherService', ['$resource', function($resource) {
    
    this.GetWeather =  function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=c693fc3e5c064d6f9af6dcb7811193b1", {
            callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});

            return weatherResult = weatherAPI.get({q: city,cnt: days});          
    };       
}]);
