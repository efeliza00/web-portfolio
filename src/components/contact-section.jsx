import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"

const ContactSection = () => {
    return (
        <Element name="contact">
            <div className="container mx-auto max-w-3xl py-28 ">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-center">
                        <AuroraText>Lets have a conversation.</AuroraText>
                    </h2>
                </BlurFade>
                <p className="text-center tracking-tight">
                    Questions? Ideas? Want to collaborate? I’d love to hear from
                    you.
                </p>
            </div>
        </Element>
    )
}

export default ContactSection
