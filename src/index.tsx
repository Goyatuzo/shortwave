// Needed to load compile styles.
const styles = require('./sass/main.scss');

import { render } from 'react-dom';
import * as React from 'react';
import createHistory from 'history/createBrowserHistory';

import { GalleryComponent } from './gallery';
import { Router, Route } from 'react-router';
import { AdminComponent } from './admin';

<<<<<<< HEAD
import firebase from './firebase/firebase';

render(<GalleryComponent />, document.getElementById("sharkwave-entry"));
=======
const history = createHistory();

render(<GalleryComponent />, document.getElementById("sharkwave-entry"));


// render(<Router history={history}>
//     <React.Fragment>
//         <Route path="/" component={GalleryComponent}>
//             <Route path="admin" component={AdminComponent} />
//         </Route>
//     </React.Fragment>
// </Router>, document.getElementById("sharkwave-entry"));
>>>>>>> 11df59834d52422c178386165c94006366b2471b
