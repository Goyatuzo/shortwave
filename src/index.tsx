// Needed to load compile styles.
const styles = require('../sass/champion-damage.scss');

import { render } from 'react-dom';
import * as React from 'react';

import { GalleryComponent } from './gallery';

render(<GalleryComponent />, document.getElementById("champion-damage-entry"));