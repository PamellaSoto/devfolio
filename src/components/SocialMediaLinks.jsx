import IconRounded from "../components/IconRounded";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (
    <div className="flex">
      <IconRounded
        href={"https://github.com/PamellaSoto"}
        label={<TbBrandGithubFilled className="text-white" />}
      />
      <IconRounded
        href={"https://www.linkedin.com/in/web-pamella-lopes/"}
        label={<FaLinkedinIn className="text-white" />}
      />
      <IconRounded href={"#"} label={<FaXTwitter className="text-white" />} />
    </div>
  );
};

export default SocialMediaLinks;
