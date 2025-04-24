import { Ring } from "ldrs/react"
import "ldrs/react/Ring.css"

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Ring size="40" stroke="5" bgOpacity="0" speed="2" color="black" />
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Wait...
            </h3>
        </div>
    )
}

export default Loading
