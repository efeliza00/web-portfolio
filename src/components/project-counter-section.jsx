import { NumberTicker } from "./ui/number-ticker"

const ProjectCounterSection = () => {
    return (
        <div className="flex flex-col bg-gradient-to-r from-[#001A6E]  to-[#074799] md:flex-row gap-20 py-16 items-center justify-center border-t border-b border-gray-100">
            <div className="text-center group ">
                <div className="relative min-h-[120px] flex items-center justify-center">
                    <NumberTicker
                        value={2}
                        className="text-7xl lg:text-8xl font-normal text-primary-foreground group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <h3 className="text-2xl lg:text-3xl leading-5 font-thin text-primary-foreground  mt-6 mb-2">
                    Clients
                </h3>
            </div>
            <div className="text-center group">
                <div className="relative min-h-[120px] flex items-center justify-center">
                    <NumberTicker
                        value={5}
                        className="text-7xl lg:text-8xl font-normal text-primary-foreground  group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <h3 className="text-2xl lg:text-3xl leading-5 font-thin text-primary-foreground  mt-6 mb-2">
                    Personal Projects
                </h3>
            </div>
        </div>
    )
}

export default ProjectCounterSection
