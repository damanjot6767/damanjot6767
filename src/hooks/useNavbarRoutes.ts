import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"


const useNavbarRoutes = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            id: '1',
            navigate: () => navigate(RoutesName.Home),
            icon: RxDashboard,
            active: RoutesName.Home===location.pathname,
            label: 'Home'
            
        },
        {
            id: '2',
            navigate: () => navigate(RoutesName.OurTeam),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurTeam===location.pathname,
            label: 'About',
        },
        {
            id: '3',
            navigate: () => navigate(RoutesName.OurServices),
            icon: RxDashboard,
            active: RoutesName.Services===location.pathname,
            label: 'Projects'
        },
        {
            id: '4',
            navigate: () => navigate(RoutesName.OurPortfolio),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurPortfolio===location.pathname,
            label: 'Experience',
        },
        {
            id: '5',
            navigate: () => navigate(RoutesName.OurPortfolio),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurPortfolio===location.pathname,
            label: 'Contact',
        },
        {
            id: '6',
            navigate: () => navigate(RoutesName.OurPortfolio),
            icon: MdOutlineAnalytics,
            active: RoutesName.OurPortfolio===location.pathname,
            label: 'Resume',
        }
    ]

    return useMemo(()=>(routes),[location.pathname])

}

export { useNavbarRoutes }