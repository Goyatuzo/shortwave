import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';
import { Link } from 'react-router-dom';
import { FilterComponent } from './filters';
import { ModalState, AlbumImageData } from '../common/album';
import { ModalComponent } from '../lib-components/modal';
import firebase from '../firebase/firebase';
import { IMediaItem } from '../common/gallery-data';
import { AlbumThumbnailComponent } from './album-thumbnail';
import { VideoThumbnailComponent } from './video-thumbnail';

interface ExternalProps {

}

interface GalleryState {
    modalState: ModalState;
    selectedAlbum: string;
    selectedVideo: string;
    items: IMediaItem[];
}

type GalleryProps = ExternalProps;

export class GalleryComponent extends React.Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props);
        this.state = {
            modalState: ModalState.CLOSED,
            selectedAlbum: '',
            selectedVideo: '',
            items: [],
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

    getMediaData(tag: string): AlbumImageData[] {
        const albumData = this.state.items.filter(item => (item.tags && item.tags.indexOf(tag) > 0));
        return albumData.map(ad => {
            return {
                caption: ad.mediaItemDescription,
                src: ad.mediaItemUrl
            } as AlbumImageData
        });
    }

    selectAlbum(id: string) {
        this.setState({ selectedAlbum: id, selectedVideo: '' });
    }

    selectVideo(youtubeId: string) {
        this.setState({ selectedAlbum: '', selectedVideo: youtubeId });
    }

    componentWillMount() {
        let itemsRef = firebase.database().ref('items');

        itemsRef.on('child_added', snapshot => {
            const value: IMediaItem = snapshot.val();

            this.setState({
                items: [...this.state.items, { key: snapshot.key, mediaItemTitle: value.mediaItemTitle, mediaItemDescription: value.mediaItemDescription, mediaItemUrl: value.mediaItemUrl, tags: value.tags }]
            });
        });
    }

    render() {
        return (
            <section className="grid-container">
                <h2 className="visually-hidden">Media Gallery</h2>
                <ul className="grid">
                    {this.state.items.map(item => <li key={item.key} className="grid-item"><AlbumThumbnailComponent onClick={(e) => this.selectAlbum(item.key)} imgSrc={item.mediaItemUrl} dateString={"September 2018"} title={item.mediaItemTitle} /></li>)}
                    <li className="grid-item">
                        <AlbumThumbnailComponent
                            onClick={(e) => this.selectAlbum('album1')}
                            imgSrc={"../src/imgs/shark.jpg"}
                            dateString={"September 2018"}
                            title={"Deftones"}
                        />
                    </li>
                    <li className="grid-item">
                        <VideoThumbnailComponent
                            onClick={(e) => this.selectVideo('691qO96VRVw')}
                            imgSrc={"../src/imgs/shark.jpg"}
                            dateString={"September 2018"}
                            title={"Deftones"}
                        />
                    </li>
                </ul>

                <Link to="/admin">ADMIN</Link>
                {/* <button onClick={(e) => this.setState({ modalState: ModalState.OPEN })}>
                    Open Modal!
                </button> */}

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
