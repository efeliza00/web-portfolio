import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { TextAnimate } from "./magicui/text-animate"

const AboutSection = ({ about }) => {
    return (
        <Element name="about" className="bg-primary-foreground relative">
            <div className="container mx-auto max-w-3xl py-28 space-y-3">
                <BlurFade
                    delay={0.25}
                    inView
                    className="absolute -top-6 left-1/2 -translate-x-1/2"
                >
                    <h2 className="text-2xl font-bold text-center tracking-tighter sm:text-4xl xl:text-5xl/none drop-shadow-md">
                        <AuroraText>About Me</AuroraText>
                    </h2>
                </BlurFade>
                <TextAnimate animation="blurIn" as="h3" className="text-center">
                    {about}
                </TextAnimate>
            </div>
        </Element>
    )
}

export default AboutSection
