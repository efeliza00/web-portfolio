import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BentoCard, BentoGrid } from "./magicui/bento-grid"
import { BlurFade } from "./magicui/blur-fade"

const ProjectSection = () => {
    const features = [
        {
            name: "Save your files",
            description: "We automatically save your files as you type.",
            href: "/",
            cta: "Learn more",
            background: (
                <img className="absolute -right-20 -top-20 opacity-60" />
            ),
        },
        {
            name: "Full text search",
            description: "Search through all your files in one place.",
            href: "/",
            cta: "Learn more",
            background: (
                <img className="absolute -right-20 -top-20 opacity-60" />
            ),
        },
        {
            name: "Multilingual",
            description: "Supports 100+ languages and counting.",
            href: "/",
            cta: "Learn more",
            background: (
                <img className="absolute -right-20 -top-20 opacity-60" />
            ),
        },
    ]
    return (
        <Element name="projects" className="bg-primary-foreground">
            <div className="container mx-auto max-w-3xl py-28 ">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                        <AuroraText>My Projects</AuroraText>
                    </h2>
                </BlurFade>
                <BentoGrid className="lg:grid-rows-3 mt-5">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </Element>
    )
}

export default ProjectSection
