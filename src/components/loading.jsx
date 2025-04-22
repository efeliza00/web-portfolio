import { Ring } from "ldrs/react"
import "ldrs/react/Ring.css"

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="black" />
        </div>
    )
}

export default Loading
