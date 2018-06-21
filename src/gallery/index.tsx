import * as React from 'react';
import {VideoThumbnailComponent} from './video-thumbnail';

interface ExternalProps {

}

type GalleryProps = ExternalProps;

export class GalleryComponent extends React.Component<GalleryProps, null> {
    constructor(props: GalleryProps) {
        super(props);
    }

    render() {
        return (
            <div className="gallery-main">
                <p className="hello">Hello World!!</p>
                <VideoThumbnailComponent
                    onClick = {(e) => console.log('click!')}
                    imgSrc={"../src/imgs/shark.jpg"}
                />
            </div>
        );
    }
}
