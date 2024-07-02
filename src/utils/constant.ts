export const RoutesName = {
        Signup: '/signup',
        Login: '/login',
        ForgetPassword: '/forgetPassword',
        NewPassword: '/newPassword',
        VerifyEmail: '/verifyEmail',
        Home: '/',
        Contact:'/contact',
        OurTeam:'/our-team',
        OurTeamDetails: 'our-team/:id',
        OurServices:'/our-services',
        OurServiceDetails:'/our-services/:id',
        OurPortfolio:'/our-portfolio',
        OurPortfolioDetails: '/our-portfolio/:id',
        NotFound: '/not-found',
        Pages: '/#',
        Services: '/services',
        Analytics: '/analytics',
        Customer: '/customer',
        Orders: '/orders',
        Profile: '/profile'
}

export const AvailableRoutes = Object.values(RoutesName);

//--------------------funtion to convert valid route name

export const ConvertIntoValidRoute = (path: string)=>{
        return path?.toLocaleLowerCase()?.split(" ")?.join("-")
}

//firebase collection names

export const firebaseCollectionName = {
        ClientReviews: 'client_reviews',
        Devronins: 'devronins',
        Services: 'services',
        TeamMembers: 'team_members',
        Technologies: 'technologies',
        Projects: 'projects'
}
