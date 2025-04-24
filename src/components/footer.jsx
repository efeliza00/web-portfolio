import { AuroraText } from "./magicui/aurora-text"

const Footer = ({info}) => {
  return (
      <div className="py-10 bg-secondary tracking-tight">
          <div className="container mx-auto max-w-3xl text-center">
              Built by <AuroraText>{info.name}</AuroraText>.
          </div>
      </div>
  )
}

export default Footer