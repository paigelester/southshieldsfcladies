import * as Axios from 'axios';

const urlLink = 'admin';

export default {
    adminLogin: (username: string, password: string): any => {
        return Axios.default.post(urlLink + '/login.php', { username: username, password: password });
    }
};