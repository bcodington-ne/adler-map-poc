import React, {useState} from 'react'

function CityPoint({x, y, cityInfo}) {
    const {cityName, locationText, locationDescription} = cityInfo;
    const [isClicked, setIsClicked] = useState(false)
    function changeToolTip() {
    
        setIsClicked(!isClicked)
    }

    {console.log('citttttttttt', cityName, y)}

    return (
        <>      
                {isClicked && <rect x={x - 125} y={(y  <= 150) ? y + 30 : y - 150 } fill="white" stroke="#166FA5" strokeWidth="2px" width="250" height="125" style={{"zIndex": "99"}}/>}
                {isClicked && <> 
                    <text x={x - 110} y={(y  <= 150) ? y + 60 : y - 120} fill="#166FA5">{cityName}</text>
                    <text x={x - 110} y={(y  <= 150) ? y + 90 : y - 90} fill="#166FA5">{locationText}</text>
                    <text x={x - 110} y={(y  <= 150) ? y + 120 : y - 60} fill="#166FA5">{locationDescription}</text>
                </>
                }
                

            <circle cx={x} cy={y} r={isClicked ? 12 : 10} fill="white" stroke="#166FA5" strokeWidth="2px" onClick={changeToolTip}/>
            {isClicked && <circle cx={x} cy={y} r={7} fill="#166FA5" onClick={changeToolTip}/>}
        </>
    )
}

export default CityPoint