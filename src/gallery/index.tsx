import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';
import { Link } from 'react-router-dom';
import { ModalState } from '../common/album';
import { ModalComponent } from '../lib-components/modal';
<<<<<<< HEAD
import firebase from '../firebase/firebase';
import { IMediaItem } from '../common/gallery-data';
=======
import { AlbumThumbnailComponent } from './album-thumbnail';
>>>>>>> be522b0e0cfb285dbdc609b8088b534f5a38c194

interface ExternalProps {

}

interface GalleryState {
    modalState: ModalState;
    selectedAlbum: string;
    items: IMediaItem[];
}

type GalleryProps = ExternalProps;

export class GalleryComponent extends React.Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props);
        this.state = {
            modalState: ModalState.CLOSED,
            selectedAlbum: '',
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

    getMediaData(albumId: string) {
        return this.albumData[albumId];
    }

    selectAlbum(id: string) {
        this.setState({ selectedAlbum: id });
    }

    // componentWillMount() {
    //     let itemsRef = firebase.database().ref('items');

    //     itemsRef.on('child_added', snapshot => {
    //         const value: IMediaItem = snapshot.val();

    //         this.setState({
    //             items: [...this.state.items, { key: snapshot.key, mediaItemTitle: value.mediaItemTitle, mediaItemDescription: value.mediaItemDescription, mediaItemUrl: value.mediaItemUrl, tags: value.tags }]
    //         });
    //     });
    // }

    render() {
        return (
            <section className="grid-container">
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

                <ModalComponent youtubeId="MD61bddZtbg" modalState={this.state.modalState}
                    onClose={() => this.setState({ modalState: ModalState.CLOSED })}
                />

            </section>
        );
    }
}
