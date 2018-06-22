import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';
import { Link } from 'react-router-dom';
import { ModalCarouselComponent } from '../lib-components/modal-carousel';
import { ModalState, AlbumImageData } from '../common/album';
import { ModalComponent } from '../lib-components/modal';

interface ExternalProps {
}

interface FilterState {

}

type FilterProps = ExternalProps;

export class FilterComponent extends React.Component<FilterProps, FilterState> {
    constructor(props: FilterProps) {
        super(props);
        this.state = {
            modalState: ModalState.CLOSED
        }
    }

    render() {
        return (
            <section>
                <div>
                    <span>Year</span>
                    <select>
                        {
                            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => <option key={val} value={val + 2018}>{val + 2018}</option>)
                        }
                    </select>
                </div>
            </section>
        );
    }
}
