import * as React from 'react';

type FormLabelProps = {
    label: string;

    inline?: boolean;
};

export default class FormLabel extends React.Component<FormLabelProps> {
    public render(): JSX.Element {
        const className = 'form-label';

        return <label className={this.props.inline ? `${className}-inline` : className}>{this.props.label}</label>;
    }
}