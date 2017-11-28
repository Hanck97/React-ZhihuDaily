/*
 * @Author: Hancock 
 * @Date: 2017-11-28 15:07:12 
*/
import axios from 'axios';

export function getLatestStoryApi() {
    return axios.get('/api/topStory').then(function (res) {
        return res;
    });
};

export function getBeforeStoryApi(date) {
    return axios({
        method: 'GET',
        url: '/api/before/',
        params: { date: date }
    }).then(function(res) {
        return res;
    })
}

export function getDetailApi(id) {
    return axios({
        method: 'GET',
        url: '/api/detail/',
        params: { id: id }
    }).then(function (res) {
        return res;
    }, function (err) {
        console.log(err);
    });
};

export function getThemesApi() {
    return axios.get('/api/themes').then(function (res) {
        return res;
    });
}

export function getThemeContentApi(id) {
    return axios({
        method: 'GET',
        url: '/api/theme/',
        params: { id: id }
    }).then(function(res) {
        return res;
    })
}