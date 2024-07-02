import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard, FaRegCircleUser, IoSettingsOutline, IoLogOutOutline } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"


const useProfileDropdown = () =>{
    const navigate = useNavigate();

    const routes = [
        {
            id: 'profile',
            navigate: () => navigate(RoutesName.Profile),
            icon: FaRegCircleUser,
            label: 'Profile'
        },
        {
            id: 'setting',
            navigate: () => navigate(RoutesName.Analytics),
            icon: IoSettingsOutline,
            label: 'Settings'
        },
        {
            id: 'logout',
            navigate: () => navigate(RoutesName.Orders),
            icon: IoLogOutOutline,
            label: 'Logout'
        }
    ]

    return useMemo(()=>(routes),[])

}

export { useProfileDropdown }