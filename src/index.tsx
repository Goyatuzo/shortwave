// Needed to load compile styles.
const styles = require('./sass/main.scss');

import { render } from 'react-dom';
import * as React from 'react';
import createHistory from 'history/createBrowserHistory';

import { GalleryComponent } from './gallery';
import { Router, Route } from 'react-router';
import { AdminComponent } from './admin';

const history = createHistory();

render(<GalleryComponent />, document.getElementById("sharkwave-entry"));


// render(<Router history={history}>
//     <React.Fragment>
//         <Route path="/" component={GalleryComponent}>
//             <Route path="admin" component={AdminComponent} />
//         </Route>
//     </React.Fragment>
// </Router>, document.getElementById("sharkwave-entry"));