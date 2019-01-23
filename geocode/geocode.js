const request = require('request');
const getGeoCode = (address, callback) => {
//console.log('argv:', argv);
    if(address){
        const encodedUrlAdress = encodeURIComponent(address);
        //const url = `http://www.mapquestapi.com/geocoding/v1/address?key=I22WmGPvq6o6ed6CCcamcP53JSlXSt0q&location=${encodedUrlAdress}`;
        //console.log('url:', url);
        request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=I22WmGPvq6o6ed6CCcamcP53JSlXSt0q&location=${encodedUrlAdress}`,
        json: true,
        }, (error, respose, body) => {

            if(error) {
                callback('Map quest returned error');
            }

            else if(body){
                if(body==='The AppKey submitted with this request is invalid.'){
                    callback('App key error');
                }
                else {
                    callback(undefined, {
                        lat: `${body.results[0].locations[0].latLng.lat}`,
                        lng: `${body.results[0].locations[0].latLng.lng}`,
                        area: `${body.results[0].locations[0].adminArea4}`
                    });
                    //console.log(`${body.results[0].${body.results[0].locations[0].latLng.lng}`locations[0].latLng.lat}`);
                    //console.log(`${body.results[0].locations[0].latLng.lng}`);
                }
            }

        
        })
    }
}

//weather api key
//7faf4e1f983e0428b39cad97433e8e97
module.exports = {
    getGeoCode
}