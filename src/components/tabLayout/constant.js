import UserFeedComponent from "../userFeed/userFeed";
import GlobalFeedComponent from "../globalFeed/globalFeed";
import { getUserToken } from "../../utils/utils";

export const USER_FEED = 'User Feed';
export const GLOBAL_FEED = 'Gloabal Feed';

export const USER_FEED_TAB_ID = "1";
export const GLOBAL_FEED_TAB_ID = "2";



export const TAB_ARRAY = [
    {
        tabId: USER_FEED_TAB_ID,
        tabName: USER_FEED,
        TabContent: UserFeedComponent,
        shouldRenderTab: false
    },
    {
        tabId:GLOBAL_FEED_TAB_ID,
        tabName: GLOBAL_FEED,
        TabContent: GlobalFeedComponent,
        shouldRenderTab: true
    }
]