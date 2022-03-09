import { geoPath, geoAlbersUsa, geoAlbers} from 'd3-geo';
import CityPoint from './CityPoint'


const projection = geoAlbersUsa();
const path = geoPath(projection);


const Marks = ({ data, cities, toolTip }) => {
    
    console.log("toolTip", toolTip)
    
    return (
    <g className='marks'>
        {
            data.features.map(feature => {
                return (
                <path strokeWidth={1}
                    stroke="#FFFFFF"
                    key={feature.properties.name}
                    d={path(feature)}
                />
                
            )})
        }
        {cities.map(d => {
            console.log("projection", projection)
            console.log("coords", d.lng, d.lat, d)
            const [x, y] = projection([d.long, d.lat])
            return <CityPoint key={d.cityName} x={x} y={y} cityInfo={d} toolTip={toolTip}/>
        })}  
    </g>
)}


export default Marks