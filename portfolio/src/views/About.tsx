// assets
import aboutPageImg from "../assets/_.jpeg";
import aboutIllustration from "../assets/about-illustration.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import youtubeIcon from "../assets/youtube-icon.svg";

// components
import { SocialMediaIcon } from "../components";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative "
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="flex-1 flex-col gap-4">
          <h1 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            About <span className="text-secondary">me</span>
          </h1>
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            Creative,self-driven Software Engineer
          </p>
          <div className="flex items-center justify-center xl:justify-start gap-6">
            <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" />
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" />
            <SocialMediaIcon imgSrc={youtubeIcon} title="Youtube" />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <img
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[1px] bg-divider" />
    </div>
  );
};

export default About;
