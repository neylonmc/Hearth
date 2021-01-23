import axios from "axios";

//these will be environmental variables
const imdbApiKey = 'bfe070362amsh86909dbb9fbfe22p191db1jsnfb9dfda72961';
const host = 'imdb8.p.rapidapi.com';

let options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
    params: { q: '' },
    headers: {
        'x-rapidapi-key': imdbApiKey,
        'x-rapidapi-host': host
    }
};

export default {
    getImdb: function (query) {
        //updates options with query
        options.params.q = query;

        //api call
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }
};