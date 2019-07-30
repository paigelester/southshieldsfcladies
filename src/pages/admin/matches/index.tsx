import * as React from 'react';

import AddMatch from './add-match';
import EditMatch from './edit-match';

import Table, { TableCell } from 'components/common/table';

import MatchService from 'services/match';

import Match from 'models/match';

type AdminMatchesState = {
    matches: Array<Match> | null;
};

export default class AdminMatches extends React.Component<{}, AdminMatchesState> {
    private matchService: MatchService;

    constructor(props: {}) {
        super(props);

        this.state = {
            matches: null
        };

        this.matchService = new MatchService();
    }

    public componentDidMount(): void {
        this.getMatches();
    }

    private getMatches(): void {
        this.matchService.getAllMatches().then((matches: any) => {
            this.setState({ matches: matches });
        });
    }

    private filterMatchesByTeam(team: string, matches: Array<Match>): Array<Match> {
        return matches.filter((match: Match) => match.team.toLowerCase() == team);
    }

    private transformMatch(match: Match): Array<TableCell> {
        return [
            match.id,
            match.type
        ]
    }

    private createMatchTable(matches: Array<Match>): JSX.Element {
        return <Table rows={matches.map((match: Match) => this.transformMatch(match))} />;
    }

    public render(): JSX.Element {
        const className = 'admin-matches';

        return (
            <div className={className}>
                <div className={`${className}-form`}>
                    <AddMatch />
                    <EditMatch />
                </div>
                {this.state.matches != null ? (
                    <div className={`${className}-matches`}>
                        <h2>First Team Matches</h2>
                        {this.createMatchTable(this.filterMatchesByTeam('first', this.state.matches))}
                        <h2>Reserve Team Matches</h2>
                        {this.createMatchTable(this.filterMatchesByTeam('reserve', this.state.matches))}
                    </div>
                ) : null}
            </div>
        );
    }
}