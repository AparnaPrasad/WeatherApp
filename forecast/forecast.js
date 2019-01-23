const request = require('request');
const forecast = (lat, lng, callback) => {
//console.log('argv:', argv);
    //if(address){
        //const encodedUrlAdress = encodeURIComponent(address);
        //const url = `https://api.darksky.net/forecast/7faf4e1f983e0428b39cad97433e8e97/12.992487,77.53328`;
        //console.log('url:', url);
        request({
        url: `https://api.darksky.net/forecast/7faf4e1f983e0428b39cad97433e8e97/${lat},${lng}`,
        json: true,
        }, (error, response, body) => {
           
            if(!error && response.statusCode === 200){
                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature
                })                   
            }
            else{
                callback('Error fetching weather data')
            }
        })
    }


//weather api key
//7faf4e1f983e0428b39cad97433e8e97
module.exports = {
    forecast
}