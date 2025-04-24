import { ThemeProvider } from "next-themes"
import useSWR from "swr"
import AboutSection from "./components/about-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import HomeSection from "./components/home-section"
import Loading from "./components/loading"
import { BlurFade } from "./components/magicui/blur-fade"
import { GridPattern } from "./components/magicui/grid-pattern"
import ProjectSection from "./components/project-section"
import SkillSection from "./components/skill-section"
import navigations from "./constants/navigations"
import { cn } from "./lib/utils"
import NavigationDock from "./ui/navigation-dock"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

function App() {
    const { data, isLoading } = useSWR("/data.json", fetcher)

    return (
        <ThemeProvider enableSystem={false}>
            <link
                rel="icon"
                type="image/svg+xml"
                href={`${data?.info?.logo}`}
            />
            <title>{data?.info.name}</title>
            <meta name="description" content={data?.info.about} />
            <GridPattern
                width={35}
                height={35}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(750px_circle_at_top,white,transparent)]"
                )}
            />
            {!isLoading ? (
                <BlurFade>
                    <div className="font-poppins antialiased relative">
                        <NavigationDock navigations={navigations} />
                        <HomeSection info={data?.info} />
                        <AboutSection about={data?.info?.about} />
                        <SkillSection skills={data?.skills} />
                        <ProjectSection
                            projects={data?.projects}
                            githubAccount={data?.contact.github}
                        />
                        <ContactSection contact={data?.contact} />
                        <Footer info={data?.info} />
                    </div>
                </BlurFade>
            ) : (
                <Loading />
            )}
        </ThemeProvider>
    )
}

export default App
