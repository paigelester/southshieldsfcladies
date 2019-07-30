import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MainHome from 'pages/main/home';
import MainTeam from 'pages/main/team';
import MainAbout from 'pages/main/about';
import MainGallery from 'pages/main/gallery';
import MainSponsors from 'pages/main/sponsors';
import MainContactUs from 'pages/main/contact-us';

import UnderConstruction from 'pages/under-construction';

import AdminHome from 'pages/admin/home';
import AdminMatches from 'pages/admin/matches';

const router = (props: any) => {
    return (
        <Router>
            <Route exact path="/" component={UnderConstruction} />

            <Route path='/home' component={MainHome} />
            <Route path='/team' component={MainTeam} />
            <Route path='/about' component={MainAbout} />
            <Route path='/gallery' component={MainGallery} />
            <Route path='/sponsors' component={MainSponsors} />
            <Route path='/contact-us' component={MainContactUs} />

            <Route exact path="/admin-home" component={AdminHome} />
            <Route exact path="/admin-matches" component={AdminMatches} />
        </Router>
    );
};

export default router;