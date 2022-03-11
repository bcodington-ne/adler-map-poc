import { useEffect, useState, useRef } from "react";
import { geoPath, geoAlbersUsa } from "d3-geo";
import CityPoint from "./CityPoint";
import CompanyTextBox from "./CompanyTextBox";
import { text } from "d3";

const projection = geoAlbersUsa();
const path = geoPath(projection);

const Marks = ({ data, cities}) => {
    console.log('marks rerender')
    const [openPointId, setOpenPointId] = useState(null)
    const [textBoxInfo, setTextBoxInfo] = useState(null);
    // if info sent back is the same, set textBoxInfo to null, 
    // if you click the same circle its removing the textbox
    console.log('openPoint on marks', openPointId)

    useEffect(() => {
        
        console.log("textbox in mark use", textBoxInfo)
        if (textBoxInfo ) setOpenPointId(textBoxInfo.id)
    },[textBoxInfo])

    function openBox(id) {
        //get info and send function to all the other markers, select by id
        // set them to isClicked = false
    }

  return (
    <g className="marks">
      {data.features.map((feature) => {
        return (
          <path
            strokeWidth={1}
            stroke="#FFFFFF"
            key={feature.properties.name}
            d={path(feature)}
          />
        );
      })}
      {/* renders city points on the map */}
      {cities.map((d,i) => {
        const [x, y] = projection([d.long, d.lat]);
        return (
          <CityPoint
            id={i}
            key={d.cityName}
            x={x}
            y={y}
            cityInfo={d}
            textBoxInfo={textBoxInfo}
            setTextBoxInfo={setTextBoxInfo}
            openPointId={openPointId}
          />
        );
      })}
        {textBoxInfo && <CompanyTextBox cityInfo={textBoxInfo}/>}

    </g>
  );
};

export default Marks;
