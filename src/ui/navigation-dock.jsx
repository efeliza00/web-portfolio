import { Dock, DockIcon } from "@/components/magicui/dock"
import { ScrollProgress } from "@/components/magicui/scroll-progress"
import { useEffect, useState } from "react"
import { Link } from "react-scroll"

const NavigationDock = ({ navigations }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <Dock
            className={`hidden lg:flex max-w-xl ${isScrolled ? "border" : "border-none"} border-1 md:visible overflow-hidden sticky top-3 z-50 `}
        >
            {navigations?.map((navigation) => (
                <DockIcon className={`cursor-pointer mx-4`}>
                    <Link
                        key={navigation.value}
                        to={navigation.value}
                        activeClass="active"
                        activeStyle={{
                            boxSizing: "border-box",
                            borderBottom: "2px solid black",
                            duration: "400",
                        }}
                        isDynamic={true}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-200}
                    >
                        {navigation.label}
                    </Link>
                </DockIcon>
            ))}
            <ScrollProgress className="bg-primary" />
        </Dock>
    )
}

export default NavigationDock
