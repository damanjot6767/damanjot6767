import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"


const useNavbarRoutes = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -90; // Adjust this value according to your navbar height
            const yCoordinate = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: yCoordinate, behavior: 'smooth' });
        //   element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const routes = [
        {
            id: 'home',
            navigate: () => scrollToSection('hero'),
            icon: RxDashboard,
            active: RoutesName.Home===location.pathname,
            label: 'Home'
            
        },
        {
            id: 'about',
            navigate: () => scrollToSection('about'),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurTeam===location.pathname,
            label: 'About',
        },
        {
            id: 'experience',
            navigate: () => scrollToSection('experience'),
            icon: RxDashboard,
            active: RoutesName.Services===location.pathname,
            label: 'Projects'
        },
        {
            id: 'technology',
            navigate: () => scrollToSection('technology'),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurPortfolio===location.pathname,
            label: 'Technology',
        },
        {
            id: 'reviews',
            navigate: () => scrollToSection('reviews'),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurPortfolio===location.pathname,
            label: 'Reviews',
        },
        {
            id: 'contact',
            navigate: () => scrollToSection('contact'),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurPortfolio===location.pathname,
            label: 'Contact',
        }
    ]

    return useMemo(()=>(routes),[location.pathname])

}

export { useNavbarRoutes }