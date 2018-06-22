import * as React from 'react';


import { ModalCarouselComponent } from './modal-carousel';
import { AlbumImageData, ModalState } from '../common/album';
import { VideoItemView } from './video-item';

interface StateToProps {
    media: AlbumImageData[];
    modalState: ModalState;
    youtubeId: string;
}

type ModalContentProps = StateToProps;

export class ModalContentComponent extends React.Component<ModalContentProps, null> {

    constructor(props: ModalContentProps) {
        super(props);
    }

    render() {
        return (
            <div className="modal-content">
                {
                    this.props.youtubeId ? <VideoItemView youtubeId={this.props.youtubeId} /> : <ModalCarouselComponent modalState={this.props.modalState} mediaItem={this.props.media} youtubeId={this.props.youtubeId} />
                }

            </div>
        );
    }
}