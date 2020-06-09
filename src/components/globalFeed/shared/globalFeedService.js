import {
    FETCH_GLOBAL_FEED_END_POINT
} from './constant';
import http from '../../../services/http-service';

export const fetchGlobalFeedService = ()=> {
    const url = `${process.env.REACT_APP_API_ROOT_URL}${FETCH_GLOBAL_FEED_END_POINT}`;
    return http.get(url, {limit:10,offset:0});
}
  