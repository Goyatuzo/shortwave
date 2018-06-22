import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';
import { Link } from 'react-router-dom';
import { ModalState } from '../common/album';
import { ModalComponent } from '../lib-components/modal';

interface ExternalProps {

}

interface GalleryState {
    modalState: ModalState;
    selectedAlbum: string;
}

type GalleryProps = ExternalProps;

export class GalleryComponent extends React.Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props);
        this.state = {
            modalState: ModalState.CLOSED,
            selectedAlbum: ''
        }
    }

    // TEST
    albumData = {
        'album1':
            [
                {
                    caption: "Rocket man!",
                    src: "http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/140926-white-5.jpg"
                }, {
                    caption: "Winter is coming.",
                    src: "http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141017_01.jpg"
                }
            ]
    }

    getMediaData(albumId: string) {
        return this.albumData[albumId];
    }

    selectAlbum(id: string) {
        this.setState({ selectedAlbum: id });
    }

    render() {
        return (
            <section className="grid-container">
                <h2 className="visually-hidden">Media Gallery</h2>
                <ul className="grid">
                    <li className="grid-item">
                        <ThumbnailComponent
                            onClick={(e) => this.selectAlbum('album1')}
                            imgSrc={"../src/imgs/shark.jpg"}
                        />
                    </li>
                    <li className="grid-item">An item</li>
                    <li className="grid-item">An item lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</li>
                    <li className="grid-item featured">A featured item</li>
                </ul>

                <Link to="/admin">ADMIN</Link>
                <button onClick={(e) => this.setState({ modalState: ModalState.OPEN })}>
                    Open Modal!
                </button>

                <ModalComponent media={[
                    {
                        caption: "Rocket man!",
                        src: "http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/140926-white-5.jpg"
                    }, {
                        caption: "Winter is coming.",
                        src: "http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141017_01.jpg"
                    }
                ]} modalState={this.state.modalState}
                    onClose={() => this.setState({ modalState: ModalState.CLOSED })}
                />

            </section>
        );
    }
}
