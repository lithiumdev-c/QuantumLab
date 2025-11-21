import { Timeline } from "../components/Timeline";
import {experiences} from "../constants"

function Experience() {
    return (
        <div className="w-full">
            <Timeline data={experiences}/>
        </div>
    )
}

export default Experience