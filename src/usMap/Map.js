import React, {useState, useEffect, useRef} from 'react';
import useData from './useUSData';
import Marks from './Marks2';
import useCities from './useCityData'


//functional component that contains the map
function Map() {

    const data = useData();
    const cities = useCities();

    const toolTip = useRef(null)
    useEffect(() => {

    },[])

    if(!data || !cities) {
        return <pre>Loading...</pre>
    }

    return (
        <div className="svg-map-container">
            <svg className="map-container" style={{"width": "100%", "height": "auto" }} viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                <Marks data={data} cities={cities} toolTip={toolTip}/>
            </svg>
            <div id="toolTip" ref={toolTip}></div>
        </div>
    )
}

export default Map