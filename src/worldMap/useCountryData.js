import React, {useState, useEffect} from "react";
import {json} from "d3";
import {feature} from 'topojson';

const jsonUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const useData = () => {
    const [data,setData] = useState(null);
    
    useEffect(() => {

        json(jsonUrl).then(topojsonData => {
            const {countries} = topojsonData.objects;
            setData(feature(topojsonData, countries));
        });
    }, [])


    return data
}

export default useData;