import { GrDocumentText } from "react-icons/gr"
import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { InteractiveHoverButton } from "./magicui/interactive-hover-button"

const HomeSection = ({ info }) => {
    return (
        <Element
            name="home"
            className="bg-inherit mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32"
        >
            <BlurFade delay={0.25} inView>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <AuroraText>{info.name}</AuroraText>, a passionate{" "}
                    <AuroraText>{info.title}</AuroraText>.
                </h2>
            </BlurFade>

            <BlurFade delay={0.5} inView className="mt-4">
                <p className="text-lg sm:text-xl xl:text-2xl text-pretty tracking-tight">
                    Nice to meet you. 🚀
                </p>
            </BlurFade>

            <BlurFade
                delay={0.75}
                inView
                className="mt-6 flex justify-center md:justify-start"
            >
                <a download href={info.resume}>
                    <InteractiveHoverButton className="mx-auto md:mx-0">
                        <div className="flex items-center gap-2">
                            <GrDocumentText />
                            <span>My Resume</span>
                        </div>
                    </InteractiveHoverButton>
                </a>
            </BlurFade>
        </Element>
    )
}

export default HomeSection
