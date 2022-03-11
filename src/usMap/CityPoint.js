import { text } from 'd3';
import React, {useState, useEffect} from 'react'

function CityPoint({x, y, cityInfo, id, textBoxInfo, setTextBoxInfo, openPointId}) {
    const { cityName, locationText, locationDescription} = cityInfo;
    const [isClicked, setIsClicked] = useState(false)

    function shouldIBeOpen(id) {
        console.log("shouldIBeOpen hitting")
        if (isClicked && openPointId === id) setIsClicked(false)
    }

    useEffect(() => {
        shouldIBeOpen(id)
    }, [textBoxInfo])

    function onClick(e) {
        e.preventDefault();
        const specificCityInfo = {
            x,
            y,
            cityName,
            locationText,
            locationDescription,
            id
        }
        if (isClicked) setTextBoxInfo(specificCityInfo);
        if (!isClicked) setTextBoxInfo(specificCityInfo);

        
        setIsClicked(!isClicked)
    }


    console.log(id, openPointId === id)
    return (
        <g >      
            <circle cx={x} cy={y} r={isClicked ? 12 : 10} fill="white" stroke="#166FA5" strokeWidth="2px" onClick={e => onClick(e)}/>
            {(isClicked && openPointId === id) && <circle cx={x} cy={y} r={7} fill="#166FA5" onClick={e => onClick(e)}/>}
        </g>
    )
}

export default CityPoint