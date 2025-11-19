import { NumberTicker } from "./ui/number-ticker"

const ProjectCounterSection = () => {
    return (
        <div className="flex flex-col bg-gradient-to-r from-pink-600 via-violet-600 to-blue-700 md:flex-row gap-20 lg:gap-32 items-center p-16 lg:p-28 justify-center border-t border-b border-gray-100">
            <div className="text-center group">
                <div className="relative min-h-[120px] flex items-center justify-center">
                    <NumberTicker
                        value={2}
                        className="text-7xl lg:text-8xl font-bold text-primary-foreground group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-95 group-hover:scale-100"></div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground  mt-6 mb-2">
                    Clients
                </h3>
            </div>
            <div className="text-center group">
                <div className="relative min-h-[120px] flex items-center justify-center">
                    <NumberTicker
                        value={5}
                        className="text-7xl lg:text-8xl font-bold text-primary-foreground  group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-95 group-hover:scale-100"></div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground  mt-6 mb-2">
                    Personal Projects
                </h3>
            </div>
        </div>
    )
}

export default ProjectCounterSection
