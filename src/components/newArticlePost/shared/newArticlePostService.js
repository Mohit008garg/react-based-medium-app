import {
    NEW_ARTICLE_POST_END_POINT
} from './constant';
import http from '../../../services/http-service';

export const submitUserPost = ({title, description, body, tagList})=> {
    const url = `${process.env.REACT_APP_API_ROOT_URL}${NEW_ARTICLE_POST_END_POINT}`;
    return http.post(url, {article:{
        title,
        description,
        body,
        tagList
    }});
}
  