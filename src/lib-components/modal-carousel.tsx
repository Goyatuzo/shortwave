import * as React from 'react';

// Figure out best way to import these modules.
const Swiper = require('swiper').default;

import ImageCarousel from './image-carousel';
import { findDOMNode } from 'react-dom';
import { ModalState, AlbumImageData } from '../common/album';
import { VideoItemView } from './video-item';

interface ExternalProps {
    mediaItem: AlbumImageData[];
    modalState: ModalState;
    youtubeId: string;
}

type ModalCarouselProps = ExternalProps;

export class ModalCarouselComponent extends React.Component<ModalCarouselProps, null> {

    private swiper;

    constructor(props: ModalCarouselProps) {
        super(props);
    }

    componentDidUpdate() {
        const element = findDOMNode(this) as Element;

        // if (this.props.modalState === ModalState.CLOSED) {
        //     this.onSlideChange(element)();
        // }

        // if (this.swiper) {
        //     this.swiper.destroy();
        // }

        // this.swiper = new Swiper(element, {
        //     // Swiper parameters
        //     init: true,
        //     slidesPerView: 1,
        //     spaceBetween: 150,
        //     slidesPerGroup: 1,
        //     speed: 750,
        //     watchOverflow: true,
        //     autoHeight: true,

        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //         type: 'custom',
        //         renderCustom: function (swiper, current, total) {
        //             return current + ' of ' + total;
        //         }
        //     },

        //     // Navigation arrows
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev'
        //     },

        //     on: {
        //         slideChange: this.boundOnSlideChange(element)
        //     }
        // });
    }

    componentWillUnmount() {
        // if (this.swiper) {
        //     this.swiper.destroy();
        // }
    }

    // onSlideChange(element: Element) {
    //     return () => {
    //         const iframes = element.querySelectorAll("iframe");

    //         for (let i = 0; i < iframes.length; ++i) {
    //             const iframe = iframes[i];

    //             iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    //         }
    //     }
    // }

    // private boundOnSlideChange = this.onSlideChange.bind(this);

    private getRender(): JSX.Element {
        if (this.props.mediaItem)
            return <ImageCarousel medias={this.props.mediaItem} />
        return null;
    }

    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.getRender()
                    }
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        );
    }
}