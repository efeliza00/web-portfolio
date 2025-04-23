import GitHubCalendar from "react-github-calendar"
import { FaGithub } from "react-icons/fa"
import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { TextAnimate } from "./magicui/text-animate"
import { Badge } from "./ui/badge"

const SkillSection = ({ skills, githubAccount }) => {
    const match = githubAccount.match(/github\.com\/([^/]+)/)
    const username = match ? match[1] : null

    return (
        <Element name="skills">
            <div className="container mx-auto max-w-3xl py-28 space-y-3">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                        <AuroraText>My Skills</AuroraText>
                    </h2>
                </BlurFade>
                <TextAnimate animation="blurIn" as="h4">
                    Technologies I've used so far..
                </TextAnimate>

                <div className="flex flex-wrap gap-2 mt-8">
                    {skills.map((skill, index) => (
                        <BlurFade
                            key={skill}
                            delay={0.25 + index * 0.05}
                            duration={0.5}
                            inView
                        >
                            <Badge className="text-xs sm:text-sm px-3 py-1 whitespace-nowrap hover:bg-secondary hover:text-primary cursor-pointer transition-all duration-200">
                                {skill}
                            </Badge>
                        </BlurFade>
                    ))}
                </div>

                <div className="mt-20 space-y-4">
                    <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
                        Checkout my{" "}
                        <FaGithub className="inline-block text-4xl" />{" "}
                        <span className="text-4xl">github</span> contributions
                    </h3>
                    <GitHubCalendar username={username} />
                </div>
            </div>
        </Element>
    )
}

export default SkillSection
