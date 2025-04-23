import { AuroraText } from "./magicui/aurora-text"

const Footer = ({info}) => {
  return (
    <div className='container mx-auto py-10 bg-secondary text-center tracking-tight'>Designed by <AuroraText>{info.name}</AuroraText>.</div>
  )
}

export default Footer