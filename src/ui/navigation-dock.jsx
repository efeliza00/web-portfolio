import { Dock, DockIcon } from "@/components/magicui/dock"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { Link } from "react-scroll"
const NavigationDock = ({ navigations }) => {
    return (
        <Dock className="justify-between gap-2 sticky top-3 z-50 overflow-hidden border-none">
            {navigations?.map((navigation) => (
                <Link
                    key={navigation.value}
                    to={navigation.value}
                    activeClass="active"
                    activeStyle={{
                        backgroundColor: "black",
                        color: "white",
                    }}
                    isDynamic={true}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-200}
                    className={`relative px-8 hover:bg-secondary rounded-lg transition-all duration-300 ease-out cursor-pointer `}
                >
                    <DockIcon>{navigation.label}</DockIcon>
                </Link>
            ))}
            <ScrollProgress className="bg-primary" />
        </Dock>
    )
}

export default NavigationDock
