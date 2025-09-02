import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    LinkedInLogoIcon,
} from "@radix-ui/react-icons"
import { Link } from "react-router"
import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { Dock, DockIcon } from "./magicui/dock"

const ContactSection = ({ contact }) => {
    return (
        <Element name="contact">
            <div className="container relative mx-auto max-w-3xl px-4 sm:px-6 py-32 lg:py-44">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-4xl lg:text-2xl font-bold tracking-tighter sm:text-4xl xl:text-8xl/none text-center">
                        <AuroraText>Lets have a conversation.</AuroraText>
                    </h2>
                </BlurFade>
                <p className="text-center xl:text-xl tracking-tight">
                    Questions? Ideas? Want to collaborate? I’d love to hear from
                    you.
                </p>
                <Dock direction="middle">
                    <Link
                        to={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Conversation"
                    >
                        <DockIcon className="hover:bg-secondary">
                            <EnvelopeClosedIcon />
                        </DockIcon>
                    </Link>
                    <Link
                        to={contact.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DockIcon className="hover:bg-secondary">
                            <LinkedInLogoIcon />
                        </DockIcon>
                    </Link>
                    <Link
                        to={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <DockIcon className="hover:bg-secondary">
                            <GitHubLogoIcon />
                        </DockIcon>
                    </Link>
                </Dock>
            </div>
        </Element>
    )
}

export default ContactSection
