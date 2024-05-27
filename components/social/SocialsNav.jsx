import { FaGithub, FaGlobe, FaLinkedinIn } from "react-icons/fa";

const iconMap = {
  FaLinkedinIn: FaLinkedinIn,
  FaGithub: FaGithub,
  FaGlobe: FaGlobe,
};

export async function getServerSideProps() {
    const res = await fetch("/api/v2/links");
    const socialLinks = await res.json();
  
    return {
      props: {
        socialLinks,
      },
    };
  }

const SocialsNav = ({ socialLinks }) => {
  return (
    <div className="flex flex-row gap-6">
      {socialLinks.map((link, index) => {
        const IconComponent = iconMap[link.reactIcon];
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent className="cursor-pointer" size={24} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialsNav;
