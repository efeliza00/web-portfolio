import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { TextAnimate } from "./magicui/text-animate"
import { Badge } from "./ui/badge"

const SkillSection = ({ skills }) => {
    return (
        <Element name="skills">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24 lg:py-32 space-y-3">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                        <AuroraText>My Skills</AuroraText>
                    </h2>
                </BlurFade>
                <TextAnimate animation="blurIn" as="h4">
                    Technologies I’ve had hands-on experience with.
                </TextAnimate>

                <div className="flex flex-wrap gap-2 min-h-20  mt-8">
                    {skills.map((skill, index) => (
                        <BlurFade
                            key={skill}
                            delay={0.25 + index * 0.1}
                            duration={0.5}
                            inView
                        >
                            <Badge className="text-xs sm:text-sm px-3 py-1 whitespace-nowrap hover:bg-secondary hover:text-primary cursor-pointer transition-all duration-200">
                                {skill}
                            </Badge>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </Element>
    )
}

export default SkillSection
