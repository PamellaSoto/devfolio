import { TbBrandGithubFilled } from 'react-icons/tb'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const SocialMediaLinks = ({ css }) => {
  return (
    <div className={`inline-flex gap-6 ${css}`}>
      <a
        className="rounded-full border-1 border-white/20 p-3 transition-all hover:scale-105 hover:border-white"
        href="https://github.com/PamellaSoto"
      >
        <TbBrandGithubFilled size={20} />
      </a>
      <a
        className="rounded-full border-1 border-white/20 p-3 transition-all hover:scale-105 hover:border-white"
        href="https://www.linkedin.com/in/web-pamella-lopes/"
      >
        <FaLinkedinIn size={20} />
      </a>
      <a
        className="rounded-full border-1 border-white/20 p-3 transition-all hover:scale-105 hover:border-white"
        href=""
      >
        <FaXTwitter size={20} />
      </a>
    </div>
  )
}

export default SocialMediaLinks
