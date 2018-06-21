// Needed to load compile styles.
const styles = require('./sass/main.scss');

import { render } from 'react-dom';
import * as React from 'react';
import createHistory from 'history/createBrowserHistory';

import { GalleryComponent } from './gallery';
import { Router, Route } from 'react-router';
import { AdminComponent } from './admin';

render(<GalleryComponent />, document.getElementById("sharkwave-entry"));
const history = createHistory();

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }

    return null;
}

if (getQueryVariable("admin") === "true") {
    render(<AdminComponent />, document.getElementById("sharkwave-entry"));
} else {
    render(<GalleryComponent />, document.getElementById("sharkwave-entry"));
}
