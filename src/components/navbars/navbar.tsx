
import { useLocation } from "react-router-dom"
import useScrollNavbar from "../../hooks/useScrollbar";
import { motion } from "../../utils/animation";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";


const Navbar = () => {

  const { pathname } = useLocation();
  const scrolled = useScrollNavbar();

  return (
      <motion.div className={`
          fixed
          top-0
          z-[50]
          w-full
          shadow-lg
          bg-white
          flex
          items-center
          justify-between
          h-auto
          px-5
          py-3`}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1 , y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}>

        {/* Logo Section */}
        <div className="
             w-[100%]
             lg:w-[30%]
             flex
             items-center
            ">
          <h1 className="text-3xl md:text-5xl font-signature font-bold">
            Damanjot Singh
          </h1>
        </div>

        {/* Navigation section  for Desktop*/}
        <DesktopNavbar/>

        {/* Navigation section for mobile */}
        <MobileNavbar/>

      </motion.div>
  )
}

export { Navbar }
