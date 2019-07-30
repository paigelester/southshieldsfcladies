import * as React from 'react';

import Badge from 'components/brand/logo';

export default class UnderConstruction extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className='under-construction'>
                <div className='under-construction-content'>
                    <Badge height={200} />
                    <h1>South Shields FC Ladies</h1>
                    <h4>Website under construction for the 2019/2020 season</h4>
                </div>
            </div>
        );
    }
}