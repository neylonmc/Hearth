import axios from "axios";

let options = {
    method: 'GET',
    url: 'http://openlibrary.org/search.json?',
    params: { q: '' }
};


export default {
    getBook: function (query) {
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
