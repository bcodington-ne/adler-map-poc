import React from 'react'

function CityPoint({x, y, cityInfo, toolTip}) {
    console.log("cityinfo",cityInfo)
    console.log(toolTip)
    function changeToolTip() {
        console.log("clicked")
        const toolTip2 = document.getElementById("toolTip")
        // let poop = <p>Heuy</p>
        toolTip2.innerText("Heuy")
    }

    return (
        <>
            <circle cx={x} cy={y} r={10} fill="yellow" onClick={changeToolTip}/>
        </>
    )
}

export default CityPoint