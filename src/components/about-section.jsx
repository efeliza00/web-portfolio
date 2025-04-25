import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { TextAnimate } from "./magicui/text-animate"

const AboutSection = ({ about }) => {
    return (
        <Element name="about" className="bg-primary-foreground relative">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32 space-y-3">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-2xl font-bold text-center tracking-tighter sm:text-4xl xl:text-5xl/none ">
                        <AuroraText>About Me</AuroraText>
                    </h2>
                </BlurFade>

                <TextAnimate
                    animation="blurIn"
                    as="h3"
                    className="text-sm sm:text-base md:text-lg text-center px-4 max-w-full mx-auto leading-relaxed"
                >
                    {about}
                </TextAnimate>
            </div>
        </Element>
    )
}

export default AboutSection
