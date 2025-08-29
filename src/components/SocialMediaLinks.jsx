import { TbBrandGithubFilled } from 'react-icons/tb'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const SocialMediaLinks = () => {
  return (
    <div className="inline-flex gap-6">
      <a href="https://github.com/PamellaSoto">
        <TbBrandGithubFilled size={20} />
      </a>
      <a href="https://www.linkedin.com/in/web-pamella-lopes/">
        <FaLinkedinIn size={20} />
      </a>
      <a href="">
        <FaXTwitter size={20} />
      </a>
    </div>
  )
}

export default SocialMediaLinks
