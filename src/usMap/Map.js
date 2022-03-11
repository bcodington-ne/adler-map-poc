import React, { useEffect } from 'react';
import useData from './useUSData';
import Marks from './Marks2';
import useCities from './useCityData'


//functional component that contains the map
function Map() {

    const data = useData();
    const cities = useCities();


    if(!data || !cities) {
        return <pre>Loading...</pre>
    }

    return (
        <div className="svg-map-container">
            <svg className="map-container" style={{"width": "100%", "height": "auto" }} viewBox="-25 0 1000 500" preserveAspectRatio="xMidYMid meet">
                <Marks data={data} cities={cities}/>
            </svg>
        </div>
    )
}

export default Map