import * as React from 'react';

import Button from 'components/common/button';

import Input, { InputTypes } from 'components/form/input';

type AddMatchState = {
    opposition: string;
};

export default class AddMatch extends React.Component<{}, AddMatchState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            opposition: ''
        };
    }

    private handleOppositionChange(event: any): void {
        let opposition = '';
        this.setState({ opposition: opposition });
    }

    public render(): JSX.Element {
        const className = 'admin-matches-add-match';

        return (
            <div className={className}>
                <h3>Add a Match</h3>
                <div>
                    <Input
                        label='Opposition:'
                        type={InputTypes.Text}
                        onChange={this.handleOppositionChange.bind(this)} />
                </div>
                <Button>Add</Button>
            </div>
        );
    }
}