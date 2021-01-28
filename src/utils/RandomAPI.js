import axios from "axios";

export default {
    randomUsers: function() {
        return (
            axios.get('https://randomuser.me/api/?results=142&nat=us')
        )          
    }
};

