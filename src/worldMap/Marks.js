import { geoNaturalEarth1, geoPath } from 'd3';

const projection = geoNaturalEarth1();
const path = geoPath(projection)

const Marks = ({ data }) => (
    <g className="marks">
        {
            data.features.map(feature => (
                <path
                    d={path(feature)}
                />
            ))
        }
    </g>
)

export default Marks