import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { FaAngleRight } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"
import TechnicalImageIcon from "../assets/images/support.png"

const useFeatureCardData = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            id: 'technical',
            title: "Technical Support",
            description: "Our customers get solutions and the business opportunities instead.",
            navigate: () => navigate(RoutesName.Home),
            icon: FaAngleRight,
            imageUrl: TechnicalImageIcon
        },
        {
            id: 'bussiness',
            title: "Business Planning",
            description: "Our purpose is to build solutions that remove the barriers preventing people.",
            navigate: () => navigate(RoutesName.Home),
            icon: FaAngleRight,
            imageUrl: TechnicalImageIcon
        },
        {
            id: 'security',
            title: "Cyber Security",
            description: "What separates theme from all other web design agencies is the ability.",
            navigate: () => navigate(RoutesName.Home),
            icon: FaAngleRight,
            imageUrl: TechnicalImageIcon
        },
    ]

    return useMemo(()=>(routes),[location.pathname])

}

export { useFeatureCardData }