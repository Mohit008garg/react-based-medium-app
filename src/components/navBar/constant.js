export const NAV_BAR_THEME_DARK = 'dark';
export const NAV_BAR_THEME_LIGHT = 'light';
export const NAV_BAR_DEFAULT_LINK = 'DEFAULT LINK';
const HOME = 'Home';
export const SignUp = 'Sign Up';
export const SignIn = 'Sign In';
export const Settings = 'Settings';
export const NEW_POST = 'New Post';

export const NAV_LINKS = [
    {
        title: HOME,
        route: '/',
        shouldDisplayBeforeLogin: true
    },
    {
        title: SignUp,
        route: '/signup',
        shouldDisplayBeforeLogin: true
    },
    {
        title: SignIn,
        route:'/signin',
        shouldDisplayBeforeLogin: true
    },
    {
        title: NEW_POST,
        route:'/newarticle',
        shouldDisplayBeforeLogin: false
    },
    {
        title: Settings,
        route:'/settings',
        shouldDisplayBeforeLogin: false
    }
];

export const FETCH_GLOBAL_ARTICLES_ACTION = 'FETCH_GLOBAL_ARTICLES_ACTION';
export const FETCH_GLOBAL_ARTICLES_SUCCESS_ACTION = 'FETCH_GLOBAL_ARTICLES_SUCCESS_ACTION';
export const FETCH_GLOBAL_ARTICLES_FAILURE_ACTION = 'FETCH_GLOBAL_ARTICLES_FAILURE_ACTION';