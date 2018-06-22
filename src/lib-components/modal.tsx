import * as React from 'react';
import * as A11yDialog from 'a11y-dialog';

import { ModalContentComponent } from './modal-content';
import { findDOMNode } from 'react-dom';
import { ModalState, AlbumImageData } from '../common/album';

interface StateToProps {
    media: AlbumImageData[];
    modalState: ModalState;
    onClose: () => void;
}

type ModalListingProps = StateToProps;

export class ModalComponent extends React.Component<ModalListingProps, null> {
    private dialog;

    constructor(props: ModalListingProps) {
        super(props);
    }

    componentDidMount() {
        const element = findDOMNode(this);

        this.dialog = new A11yDialog(element);
    }

    componentWillReceiveProps(props: ModalListingProps) {
        if (props.media !== this.props.media) {
            this.dialog.show();
            return;
        }

        /*
         * The modal show / hide needs to be in this because there is nothing in render function that will trigger a change.
         */
        switch (this.props.modalState) {
            case ModalState.OPEN: {
                this.dialog.show();
                break;
            }

            case ModalState.CLOSED: {
                this.dialog.hide();
                break;
            }

            default:
                break;
        }
    }

    closeModal() {
        this.props.onClose();
    }

    private boundCloseModal = this.closeModal.bind(this);

    render() {
        return (
            <div id="media-gallery-modal" aria-hidden="true" className="modal-js modal-lockhtml-js modal-wrapper modal-multimedia">
                <div role="dialog" aria-labelledby="modalTitle" className="modal-container">
                    <div className="modal-inner" role="document">
                        <div className="modal-overlay" tabIndex={-1} onClick={this.boundCloseModal}></div>
                        <button type="button" onClick={this.boundCloseModal} aria-label="Close this dialog window" className="modal-close"></button>

                        <ModalContentComponent media={this.props.media} modalState={this.props.modalState} />
                    </div>
                </div>
            </div>
        );
    }
}