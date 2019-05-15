import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import UnderConstruction from './pages/under-construction';

const router = (props: any) => {
    return (
        <Router>
            <Route exact path="/" component={UnderConstruction} />
        </Router>
    );
};

export default router;