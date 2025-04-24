import { Dock, DockIcon } from "@/components/magicui/dock"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { useState } from "react"
import { Link } from "react-scroll"

const NavigationDock = ({ navigations }) => {
    const [activeSection, setActiveSection] = useState("")

    return (
        <Dock className="justify-between gap-2 sticky top-3 z-50 overflow-hidden border-none">
            {navigations?.map((navigation) => (
                <Link
                    key={navigation.value}
                    to={navigation.value}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onSetActive={(to) => {
                        setActiveSection(to)
                    }}
                    className={`relative px-8 hover:bg-secondary rounded-lg transition-all duration-300 ease-out cursor-pointer ${
                        activeSection === navigation.value
                            ? "bg-accent-foreground text-white shadow-xs font-medium scale-105"
                            : "opacity-80 hover:opacity-100 hover:bg-accent/20"
                    }`}
                >
                    <DockIcon>{navigation.label}</DockIcon>
                </Link>
            ))}
            <ScrollProgress className="bg-primary" />
        </Dock>
    )
}

export default NavigationDock
