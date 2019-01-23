const request = require('request');
const getGeoCode = (address) => {
    return new Promise((resolve, reject)=>{
        const encodedUrlAdress = encodeURIComponent(address);
        request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=I22WmGPvq6o6ed6CCcamcP53JSlXSt0q&location=${encodedUrlAdress}`,
        json: true,
        }, (error, respose, body) => {

            if(error) {
                reject('Map quest returned error');
            }

            else if(body){
                if(body==='The AppKey submitted with this request is invalid.'){
                    reject('App key error');
                }
                else {
                    resolve( {
                        lat: `${body.results[0].locations[0].latLng.lat}`,
                        lng: `${body.results[0].locations[0].latLng.lng}`,
                        area: `${body.results[0].locations[0].adminArea4}`
                    });
                }
            }
        })
    });        
}


getGeoCode(null).then((result)=>{
    console.log(JSON.stringify(result, undefined, 2))
}).catch((error)=>{
    console.log(error)
})
