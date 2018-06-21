// Needed to load compile styles.
const styles = require('./sass/main.scss');

import { render } from 'react-dom';
import * as React from 'react';

import { GalleryComponent } from './gallery';

render(<GalleryComponent />, document.getElementById("sharkwave-entry"));