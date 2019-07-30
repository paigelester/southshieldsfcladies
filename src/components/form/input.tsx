import * as React from 'react';

import FormLabel from 'components/form/form-label';

export enum InputTypes {
    Text,
    Number
}

type InputProps = {
    type: InputTypes;
    onChange: <T>(event: React.ChangeEvent<T>) => void;

    label?: string;
    labelInline?: boolean;
};

export default class Input extends React.Component<InputProps> {
    private convertType(type: InputTypes): string {
        switch (type) {
            case InputTypes.Text:
                return 'text';
            case InputTypes.Number:
                return 'number';
        }
    }

    public render(): JSX.Element {
        return (
            <div>
                {this.props.label ? <FormLabel label={this.props.label} inline={this.props.labelInline} /> : null}
                <input
                    type={this.convertType(this.props.type)}
                    onChange={this.props.onChange} />
            </div>
        );
    }
}