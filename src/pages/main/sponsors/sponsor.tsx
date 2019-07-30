import * as React from 'react';

export type SponsorDetails = {
    name: string;
    image: string;
    content: string;
};

const Sponsor = (props: SponsorDetails) => {
    const className = 'sponsor';

    return (
        <div className={`${className}`}>
            <h2 className={`${className}-name`}>{props.name}</h2>
            <p className={`${className}-content`}>{props.content}</p>
        </div>
    );
};

export default Sponsor;