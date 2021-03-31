import client from './client';
const ACCESS_KEY='56353d59ca0e100b2e6273cc279fbd6c';

const endpoint=`/news?access_key=${ACCESS_KEY}&limit=100&sources=bbc,cnn`;

const getNewsList = () =>client.get(endpoint);

export default{
    getNewsList,
}