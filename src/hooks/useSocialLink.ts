import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard, FaFacebookF, FaTwitter, FaInstagram  } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"
import { IconType } from "react-icons"


export const useSocialLinkRoutes = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            id: 'Facebook',
            navigate: () => navigate('#'),
            icon: FaFacebookF,
            label: 'Facebook'
        },
        {
            id: 'Twitter',
            navigate: () => navigate("#"),
            icon: FaTwitter,
            label: 'Twitter',
        },
        {
            id: 'Instagram',
            navigate: () => navigate("#"),
            icon: FaInstagram,
            label: 'Instagram',
        },

    ]

    return useMemo(()=>(routes),[location.pathname])

}

type SocialIconName = 'facebook' | 'twitter';

export const useSocialIcon = () => {
  const getSocialIcon = (iconName: SocialIconName): IconType => {
    switch (iconName.toLowerCase()) {
      case 'facebook':
        return FaFacebookF;
      case 'twitter':
        return FaTwitter;
      default:
        return FaTwitter; // or any other default icon
    }
  };

  return {getSocialIcon}
};
