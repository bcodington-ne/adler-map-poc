
import React, {useState} from "react";

function CompanyTextBox({cityInfo}) {
    console.log("textbox rerender")
    const { cityName, locationText, locationDescription, x, y} = cityInfo;
    return (
        <g>
            <rect
                className="text-rect"
                x={x - 125}
                y={y <= 150 ? y + 30 : y - 150}
                fill="white"
                stroke="#166FA5"
                strokeWidth="2px"
                width="250"
                height="125"
                style={{ zIndex: "99" }}
            />
            <text x={x - 110} y={(y  <= 150) ? y + 60 : y - 120} fill="#166FA5">{cityName}</text>
            <text x={x - 110} y={(y  <= 150) ? y + 90 : y - 90} fill="#166FA5">{locationText}</text>
            <text x={x - 110} y={(y  <= 150) ? y + 120 : y - 60} fill="#166FA5">{locationDescription}</text>
        </g>
    );
}

export default CompanyTextBox;
