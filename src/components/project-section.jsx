import { CodeIcon, Link1Icon, LinkNone2Icon } from "@radix-ui/react-icons"
import GitHubCalendar from "react-github-calendar"
import { FaGithub } from "react-icons/fa"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"
import { Link } from "react-router"
import { Element } from "react-scroll"
import { AuroraText } from "./magicui/aurora-text"
import { BlurFade } from "./magicui/blur-fade"
import { TextAnimate } from "./magicui/text-animate"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"

const ProjectCard = ({ project }) => {
    return (
        <PhotoProvider pullClosable={false} maskClosable={false}>
            <div className="border rounded-lg col-span-1 h-[25rem] overflow-hidden group shadow hover:cursor-pointer hover:ring hover:ring-offset-4 bg-card">
                {/* Image Container (Fixed Height) */}
                <div className="h-[6.5rem] w-full overflow-hidden relative">
                    {project.images.map((image, index) => (
                        <PhotoView
                            height={1000}
                            width={800}
                            key={index}
                            src={image}
                        >
                            {index < 1 ? (
                                <img
                                    src={image}
                                    alt={`${image}-${index}`}
                                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-110"
                                />
                            ) : undefined}
                        </PhotoView>
                    ))}
                </div>
                {/* Rest of the card content */}
                <div className="p-4 space-y-3">
                    <h3 className="tracking-tight text-lg font-semibold h-[3rem] line-clamp-3">
                        {project.title}
                    </h3>
                    <div className="flex gap-1 items-center">
                        {project.url ? (
                            <Link
                                to={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="icon">
                                    <Link1Icon />
                                </Button>
                            </Link>
                        ) : (
                            <Button variant="outline" size="icon" disabled>
                                <LinkNone2Icon />
                            </Button>
                        )}
                        {project.code ? (
                            <Link
                                to={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="icon">
                                    <CodeIcon />
                                </Button>
                            </Link>
                        ) : (
                            <Button variant="outline" size="icon" disabled>
                                <CodeIcon />
                            </Button>
                        )}
                    </div>
                    <Separator />
                    <ScrollArea className="h-20">
                        <p className="tracking-tight text-sm">
                            {project.description}
                        </p>
                    </ScrollArea>
                    <div className="space-x-1 line-clamp-3">
                        {project.technologies.map((technology) => (
                            <Badge key={technology}>{technology}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </PhotoProvider>
    )
}

const ProjectSection = ({ projects, githubAccount }) => {
    const match = githubAccount.match(/github\.com\/([^/]+)/)
    const username = match ? match[1] : null
    return (
        <Element name="projects" className="bg-primary-foreground">
            <div className="container mx-auto max-w-3xl py-28 space-y-5">
                <BlurFade delay={0.25} inView>
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">
                        <AuroraText>My Projects</AuroraText>
                    </h2>
                </BlurFade>
                <TextAnimate animation="blurIn" as="h4">
                    Here are the list of my solid projects. Check it out!
                </TextAnimate>
                <div className="grid grid-cols-3 gap-3">
                    {projects?.map((project, index) => {
                        return (
                            <BlurFade
                                key={index}
                                delay={0.25 + index * 0.2}
                                duration={0.5}
                                inView
                            >
                                <ProjectCard project={project} key={index} />
                            </BlurFade>
                        )
                    })}
                </div>
                <div className="mt-20 space-y-4">
                    <h3 className="scroll-m-20 text-xl/none font-semibold tracking-tight text-center">
                        Take a look at my{" "}
                        <span className="inline-flex items-center gap-1">
                            <FaGithub className="text-4xl" />{" "}
                            <span className="text-4xl">GitHub</span>
                        </span>{" "}
                        contributions.
                    </h3>
                    <GitHubCalendar username={username} />
                </div>
            </div>
        </Element>
    )
}

export default ProjectSection
