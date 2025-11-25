import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { TextAnimate } from "./magicui/text-animate"

const AboutSection = ({ about }) => {
    return (
        <Element name="about" className="bg-primary-foreground relative">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32 space-y-3">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-6xl font-bold text-center tracking-tighter sm:text-4xl xl:text-5xl/none ">
                        <AuroraText colors={["#001A6E", "#074799", "#EEEE"]}>
                            About Me
                        </AuroraText>
                    </h2>
                </BlurFade>

                <TextAnimate
                    animation="blurIn"
                    as="h3"
                    className="text-sm  sm:text-base md:text-xl text-center font-light px-4 max-w-full mx-auto leading-relaxed md:leading-10"
                >
                    {about}
                </TextAnimate>
            </div>
        </Element>
    )
}

export default AboutSection
