import {
 FETCH_TAG_END_POINT
} from './constant';
import http from '../../../services/http-service';

export const fetchTagsService = ()=> {
    const url = `${process.env.REACT_APP_API_ROOT_URL}${FETCH_TAG_END_POINT}`;
    return http.get(url);
}
  