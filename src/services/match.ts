import RequestService from 'services/request';

const Request = require('request');

class MatchService extends RequestService {
    private urlLink: string = 'matches';

    public getAllMatches = () => {
        return this.get(this.getServiceUrl(this.urlLink, 'get'));
    }

    public getMatchesByTeam = (team: string) => {
        if (team.toLowerCase() == 'first') {
            return this.get(this.getServiceUrl(this.urlLink, 'getFirstMatches'));
        }

        return this.get(this.getServiceUrl(this.urlLink, 'getReservesMatches'));
    }
}

export default MatchService;