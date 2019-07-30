import * as React from 'react';

import Sponsor, { SponsorDetails } from './sponsor';

type SponsorsProps = {
    sponsors: Array<SponsorDetails>;
};

export default class Sponsors extends React.Component<SponsorsProps> {
    public render(): JSX.Element {
        return (
            <div>
                <h1>Sponsors</h1>
                <p>A big thank you to all our fantastic sponsors from everyone associated with South Shields Ladies.</p>
                <p>If you or your company are interested in sponsoring South Shields Ladies we'd love to hear from you! Go to the contact us page and fill out the contact form or call Stephen on 07772075395.</p>
                <div>
                    {this.props.sponsors.map((sponsor: SponsorDetails, index: number) => (
                        <Sponsor key={index} {...sponsor} />
                    ))}
                </div>
            </div>
        );
    }
}