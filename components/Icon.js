import { IconGithub, IconInstagram, IconLinkedin, IconTwitter } from './Icons'
const Icon = ({ name, color }) => {
  switch (name) {
    case 'Github':
      return <IconGithub color={color} />
    case 'Instagram':
      return <IconInstagram color={color} />
    case 'Twitter':
      return <IconTwitter color={color} />
    case 'Linkedin':
      return <IconLinkedin color={color} />
    default:
      return <span>Empty</span>
  }
}

export default Icon
