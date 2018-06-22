import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';
import { Link } from 'react-router-dom';
import { FilterComponent } from './filters';
import { ModalState } from '../common/album';
import { ModalComponent } from '../lib-components/modal';
import { AlbumThumbnailComponent } from './album-thumbnail';

interface ExternalProps {

}

interface GalleryState {
    modalState: ModalState;
    selectedAlbum: string;
    selectedVideo: string;
}

type GalleryProps = ExternalProps;

export class GalleryComponent extends React.Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props);
        this.state = {
            modalState: ModalState.CLOSED,
            selectedAlbum: '',
            selectedVideo: '',
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
        this.setState({ selectedAlbum: id, selectedVideo: '' });
    }

    render() {
        return (
            <section className="grid-container">
                <FilterComponent />

                <h2 className="visually-hidden">Media Gallery</h2>
                <ul className="grid">
                <li className="grid-item featured">A featured item</li>
                    <li className="grid-item">
                        <AlbumThumbnailComponent
                            onClick={(e) => this.selectAlbum('album1')}
                            imgSrc={"../src/imgs/shark.jpg"}
                            dateString={"September 2018"}
                            title={"Deftones"}
                        />
                    </li>
                    <li className="grid-item">An item</li>
                    <li className="grid-item">An item lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</li>
                    
                </ul>

                <Link to="/admin">ADMIN</Link>
                <button onClick={(e) => this.setState({ modalState: ModalState.OPEN })}>
                    Open Modal!
                </button>

                <ModalComponent 
                    youtubeId={this.state.selectedVideo} 
                    modalState={this.state.modalState}
                    media={this.getMediaData(this.state.selectedAlbum)}
                    onClose={() => this.setState({ modalState: ModalState.CLOSED })}
                />

            </section>
        );
    }
}
