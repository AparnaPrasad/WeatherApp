
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const forecast = require('./forecast/forecast');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().alias('help', 'h')
.argv;

geocode.getGeoCode(argv.address, (error, geoCodeResult)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(`Location: ${geoCodeResult.area}`);

        
        forecast.forecast(geoCodeResult.lat, geoCodeResult.lng,  (error, forecastResult)=>{
            if(error){
                console.log('error', error);
            }
            else{
                console.log(`At ${geoCodeResult.area}, it is now ${forecastResult.temperature}. 
                    And it feels like ${forecastResult.apparentTemperature}`);
            }

        });
    }
});


