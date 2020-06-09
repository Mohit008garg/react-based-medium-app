import {
    NEW_ARTICLE_POST_ACTION
} from './constant';

export const postArticle = (title, articleSummary, artilceDescription, tags) => ({
    type: NEW_ARTICLE_POST_ACTION,
    payload:{title, description: articleSummary, body: artilceDescription, tagList: tags.split(',')}
});