import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';
import { Link } from 'react-router-dom';
import { ModalCarouselComponent } from '../lib-components/modal-carousel';
import { ModalState } from '../common/album';
import { ModalComponent } from '../lib-components/modal';

interface ExternalProps {

}

interface GalleryState {
    modalState: ModalState;
}

type GalleryProps = ExternalProps;

export class GalleryComponent extends React.Component<GalleryProps, GalleryState> {
    constructor(props: GalleryProps) {
        super(props);
        this.state = {
            modalState: ModalState.CLOSED
        }
    }

    render() {
        return (
            <section className="grid-container">
                <h2 className="visually-hidden">Media Gallery</h2>
                <ul className="grid">
                    <li className="grid-item">
                        <ThumbnailComponent
                            onClick={(e) => console.log('click!')}
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

                <ModalComponent youtubeId="MD61bddZtbg" modalState={this.state.modalState}
                    onClose={() => this.setState({ modalState: ModalState.CLOSED })}
                />

            </section>
        );
    }
}
