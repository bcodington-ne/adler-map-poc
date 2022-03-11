import React, {useState, useEffect} from "react";
import {json} from "d3";
import {feature} from 'topojson';

const jsonUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

//world map
// const jsonUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        json(jsonUrl).then(topojsonData => {
            const {states} = topojsonData.objects;
            setData(feature(topojsonData, states))
        }) 

    },[])

    return data
}

export default useData;