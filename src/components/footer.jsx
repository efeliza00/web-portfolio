import { AuroraText } from "./magicui/aurora-text"

const Footer = ({ info }) => {
    return (
        <div className="py-10 bg-secondary tracking-tight">
            <div className="container mx-auto max-w-3xl text-center">
                Built by{" "}
                <AuroraText colors={["#001A6E", "#074799", "#EEEE"]}>
                    {info.name}
                </AuroraText>
                .
            </div>
        </div>
    )
}

export default Footer
