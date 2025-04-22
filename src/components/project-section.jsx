import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"

const ProjectSection = () => {
    return (
        <Element name="projects" className="bg-primary-foreground">
            <div className="container mx-auto max-w-3xl py-28 ">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                        <AuroraText>My Projects</AuroraText>
                    </h2>
                </BlurFade>
                <p>
                    a passionate web developer with expertise in building
                    modern, responsive, and user-friendly websites and
                    applications. I specialize in [mention your key skills,
                    e.g., front-end development (HTML, CSS, JavaScript, React),
                    back-end development (Node.js, Python, PHP), or full-stack
                    development]. With a strong eye for detail and a love for
                    clean, efficient code, I create seamless digital experiences
                    that meet both user needs and business goals. Whether it’s
                    crafting dynamic single-page applications, optimizing
                    performance, or solving complex technical challenges, I
                    thrive on turning ideas into functional, visually appealing
                    solutions.a passionate web developer with expertise in
                    building modern, responsive, and user-friendly websites and
                    applications. I specialize in [mention your key skills,
                    e.g., front-end development (HTML, CSS, JavaScript, React),
                    back-end development (Node.js, Python, PHP), or full-stack
                    development]. With a strong eye for detail and a love for
                    clean, efficient code, I create seamless digital experiences
                    that meet both user needs and business goals. Whether it’s
                    crafting dynamic single-page applications, optimizing
                    performance, or solving complex technical challenges, I
                    thrive on turning ideas into functional, visually appealing
                    solutions.
                </p>
            </div>
        </Element>
    )
}

export default ProjectSection
