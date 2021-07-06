import { IconGithub, IconInstagram, IconLinkedin, IconTwitter } from './Icons'
const Icon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />
    case 'Instagram':
      return <IconInstagram />
    case 'Twitter':
      return <IconTwitter />
    case 'Linkedin':
      return <IconLinkedin />
    default:
      return <span>Empty</span>
  }
}

export default Icon
