import * as React from 'react';

import Badge from 'assets/img/badge.png';

type LogoProps = {
    height?: number;
};

export default class Logo extends React.Component<LogoProps> {
    public render(): JSX.Element {
        const defaultLogoHeight = 60;

        return <img src={Badge} height={this.props.height || defaultLogoHeight} />;
    }
}