import * as React from 'react';
import { VideoThumbnailComponent } from './video-thumbnail';

interface ExternalProps {

}

type GalleryProps = ExternalProps;

export class GalleryComponent extends React.Component<GalleryProps, null> {
    constructor(props: GalleryProps) {
        super(props);
    }

    render() {
        return (
            <section className="grid-container">
                <h2 className="visually-hidden">Media Gallery</h2>
                <ul className="grid">
                    <li className="grid-item">
                        <VideoThumbnailComponent
                            onClick={(e) => console.log('click!')}
                            imgSrc={"../src/imgs/shark.jpg"}
                        />
                    </li>
                    <li className="grid-item">An item</li>
                    <li className="grid-item">An item lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</li>
                    <li className="grid-item featured">A featured item</li>
                </ul>
            </section>
        );
    }
}
