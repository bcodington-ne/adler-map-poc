import {useState, useEffect} from "react";
import cityData from '../cityData';

//function to clean data coming from amp 

function cleanCityData(data) {
    let newData = [];
    for(let city of data.content.locations) {
        let newCityObj = {
            //change this to actual city key when it comes out
            cityName: city.companyName,
            locationText: city.locationText,
            locationDescription: city.locationDescription,
            lat: city.location.lat,
            long: city.location.lng
        }
        newData.push(newCityObj)
    }
    return newData
}

const useCityData = () => {
    const [cities, setCities] = useState(null)

    console.log("clean", cleanCityData(cityData))

    useEffect(() => {
        let cleanedCityData = cleanCityData(cityData);
        setCities(cleanedCityData)
    },[])

    return cities
}

export default useCityData;