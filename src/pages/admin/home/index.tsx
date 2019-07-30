import * as React from 'react';
import { Link } from 'react-router-dom';

type AdminLink = {
    to: string;
    name: string;
};

const AdminHome = () => {
    const className = 'admin-home';

    const links: Array<AdminLink> = [
        { to: 'admin-news', name: 'News' },
        { to: 'admin-matches', name: 'Matches' },
        { to: 'admin-players', name: 'Players' },
        { to: 'admin-sponsors', name: 'Sponsors' }
    ];

    return (
        <div className={className}>
            <div className={`${className}-content`}>
                <h1>Welcome Admin!</h1>
                {links.map((link: AdminLink, index: number) => (
                    <div key={`${className}-content-link-${index}`} className={`${className}-content-link`}>
                        <Link to={link.to}>{link.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminHome;