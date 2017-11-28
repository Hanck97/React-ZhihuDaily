/*
 * @Author: Hancock 
 * @Date: 2017-11-28 15:08:38 
*/
import {
    getLatestStoryApi,
    getDetailApi,
    getBeforeStoryApi,
    getThemesApi,
    getThemeContentApi,
} from '../helpers/api';


//获得最近的文章列表

export const getLatestDate = () =>{
    return(dispatch,getStore) => {
        if(getStore().mainList.length > 0){
            return;
        }

        getLatestStoryApi().then(res => {
            dispatch(getLatest(res));
        });

    };

};