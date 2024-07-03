
import { useLocation, useNavigate } from "react-router-dom"
import useScrollNavbar from "../../hooks/useScrollbar";
import { motion } from "../../utils/animation";
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";

import { useNavbarRoutes } from "../../hooks/useNavbarRoutes";
import { FaChevronDown, GoArrowRight } from "../../utils/icons"
import { cn } from "../../lib/utils";
import { useSocialLinkRoutes } from "../../hooks/useSocialLink";
import { RoutesName } from "../../utils/constant";
import { SocialLinks } from "../common/socialLinks";
import { useTypedSelector } from "../../stateStore";

const social_links = 
[
  {
      "social_type": "linkedin",
      "social_link": "https://www.linkedin.com/in/damanjot-singh-986330198/",
      "id": "1"
  },
  {
      "social_type": "github",
      "social_link": "https://github.com/damanjot6767",
      "id": "2"
  },
]


const DesktopNavbar = () => {
  const navbarRoutes = useNavbarRoutes();
  const navigate = useNavigate()

  const { devroninsDetails, error, devroninsDetailsLoading } = useTypedSelector((state) => state.Devronins);

  console.log("22", devroninsDetails)

  const textMotion = {
    rest: {
      color: "grey",
      scaleX: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      color: "blue",
      scaleX: 1,
      borderRadius: "5px",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  const handleDownload = () => {
    // This approach is for demonstration; you can also link directly in the button below
    const link = document.createElement('a');
    link.href = "/assets/PDF/Damanjot-Singh-Resume.pdf";
    link.download = 'Damanjot-Singh-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="
            hidden
            lg:flex
            items-center
            justify-between
            gap-5">

      {/* Page Navigation */}
      <div className="
              flex
              items-center
              justify-center">

        {navbarRoutes?.map((item) => (
          <motion.div
            key={item.id}
            className="
                  relative
                  flex
                  flex-col
                  items-center
                  gap-2
                  p-4
                  group"
            initial="rest"
            whileHover="hover"
            animate="rest">

            <div className="
                    flex
                    items-center
                    gap-2"
              onClick={item.navigate}>
              <TypographyH5 title={item.label} />
              {/* <FaChevronDown 
                      size={15} 
                      className="
                      mt-2 
                      transition-all 
                      duration-500 
                      ease-in-out 
                      group-hover:rotate-180"/> */}
            </div>

            <motion.div className="
                      w-full
                      borber-b
                      border-[2px]
                      border-primary-foreground"
              variants={textMotion} />

          </motion.div>
        ))}
      </div>

      {/* Social links */}

      <div className="
          flex
          items-center
          justify-center">
          <SocialLinks items={social_links} className="border-none p-[6px]" />
      </div>

      {/* Free Quote */}
      <div className="
          ml-4
          flex
          item-center
          ">
        <button className="
            flex
            items-center
            py-3
            px-6
            gap-3
            bg-muted
            rounded-md
            group
            text-primary-foreground
            transition-all
            duration-200
            hover:text-white
            hover:bg-primary"
          onClick={handleDownload}>
          <TypographyH5 className="font-[600]" title="Resume" />
          <GoArrowRight
            size={20}
            className="
              transition-all
              duration-300
              rotate-[-45deg]
              group-hover:rotate-0"/>
        </button>
      </div>
    </div>
  )
}

export { DesktopNavbar }
