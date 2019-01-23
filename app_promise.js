
const yargs = require('yargs');
const axios = require('axios');

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

//const address = argv.address;
const encodedUrlAdress = encodeURIComponent(argv.address);
axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=I22WmGPvq6o6ed6CCcamcP53JSlXSt0q&location=${encodedUrlAdress}`).then((response)=>{
    //console.log('responese', JSON.stringify(response.data, undefined, 2));
    const lat = `${response.data.results[0].locations[0].latLng.lat}`;
    const lng = `${response.data.results[0].locations[0].latLng.lng}`;
    const area = `${response.data.results[0].locations[0].adminArea4}`;
    return axios.get(`https://api.darksky.net/forecast/7faf4e1f983e0428b39cad97433e8e97/${lat},${lng}`)
}).then((response)=>{
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It is now ${temperature}. But it feels like ${apparentTemperature}`);
}).catch((e)=>console.log('ERROR', e.message))

//TODO take default argument 
//display other properties
