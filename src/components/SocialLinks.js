import { socialLinks } from '../data'
import SocialLink from './SocialLink'

function SocialLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} {...link} itemClass={itemClass} />
      })}
    </ul>
  )
}

export default SocialLinks
