import React, {useState, useEffect} from "react";
import useData from './useCountryData';
import Marks from './Marks'


function Map() {
    const width = 900;
    const height = 500;

    const data = useData();

    if(!data) {
        return <pre>Loading...</pre>
    }

    return (
        <div>
            <svg className="map-container" width={width} height={height}>
                <Marks data={data}/>
            </svg>
        </div>
    )
}

export default Map