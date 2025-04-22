import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { InteractiveHoverButton } from "./magicui/interactive-hover-button"

const HomeSection = ({ info }) => {
    return (
        <Element name="home" className="container mx-auto max-w-3xl py-28">
            <BlurFade delay={0.25} inView>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <AuroraText>{info.name}</AuroraText> a passionate{" "}
                    <AuroraText>{info.title}</AuroraText> developer.
                </h2>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView className="mt-4">
                <span className="text-pretty text-xl tracking-tighter sm:text-xl xl:text-2xl/none">
                    Nice to meet you.
                </span>
            </BlurFade>
            <BlurFade delay={0.25 * 3} inView className="mt-4">
                <InteractiveHoverButton>My Resume</InteractiveHoverButton>
            </BlurFade>
        </Element>
    )
}

export default HomeSection
