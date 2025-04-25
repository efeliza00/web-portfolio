import { CodeIcon, Link1Icon, LinkNone2Icon } from "@radix-ui/react-icons"
import GitHubCalendar from "react-github-calendar"
import { FaGithub } from "react-icons/fa"
import { IoIosCog } from "react-icons/io"
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

const ProjectCard = ({ project }) => {
    return (
        <PhotoProvider pullClosable={false} maskClosable={false}>
            <div
                tabIndex={0}
                className="border rounded-lg col-span-1 h-[25rem] min-h-[25rem] relative overflow-hidden group shadow bg-card focus-within:ring focus-within:ring-offset-4"
            >
                <div className="h-1/2 w-full overflow-hidden relative">
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
                                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-110 group-active:scale-110 focus-within:scale-110"
                                />
                            ) : undefined}
                        </PhotoView>
                    ))}
                    <div className="absolute bottom-2 right-5 invisible group-hover:visible group-active:visible group-focus-within:visible flex gap-1 items-center">
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
                </div>
                <div className="p-4 h-[calc(50%-1rem)] space-y-3">
                    <h3 className="tracking-tight text-xl font-semibold">
                        {project.title}
                    </h3>
                    <ScrollArea className="h-[calc(100%-2rem)]">
                        <p className="tracking-tight text-sm">
                            {project.description}
                        </p>
                        <div className="space-x-1 line-clamp-3">
                            {project.technologies.map((tech) => (
                                <Badge key={tech}>{tech}</Badge>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </PhotoProvider>
    )
}

const MoreProjectCard = () => {
    return (
        <div
            tabIndex={0}
            className="border-3 border-dashed  bg-transparent rounded-lg col-span-1 h-[25rem] min-h-[25rem] relative flex text-center items-center justify-center flex-col p-4 overflow-hidden group focus-within:ring focus-within:ring-offset-4"
        >
            <IoIosCog className="text-9xl text-accent" />
            <h2 className="text-lg font-bold tracking-tighter sm:text-xl xl:text-2xl/none ">
                <AuroraText>New Projects Coming Soon..</AuroraText>
            </h2>
            <span className="text-xs">
                <TextAnimate animation="blurIn" as="p">
                    I'm currently working on new exciting projects. Stay tuned!
                </TextAnimate>
            </span>
        </div>
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
                <div className="grid grid-cols-2 gap-3">
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
                    {projects.length < 5 && (
                        <BlurFade
                            delay={0.25 + projects.length * 0.2}
                            duration={0.5}
                            inView
                        >
                            <MoreProjectCard />
                        </BlurFade>
                    )}
                </div>
                <div className="mt-20 space-y-4">
                    <h3 className="scroll-m-20 text-xl/none font-semibold px-4 sm:px-6 py-16 sm:py-24 lg:py-32 tracking-tight text-center">
                        Take a look at my{" "}
                        <span className="inline-flex items-center gap-1">
                            <FaGithub className="text-4xl" />{" "}
                            <span className="text-4xl">GitHub</span>
                        </span>{" "}
                        activity.
                    </h3>
                    <GitHubCalendar username={username} />
                </div>
            </div>
        </Element>
    )
}

export default ProjectSection
