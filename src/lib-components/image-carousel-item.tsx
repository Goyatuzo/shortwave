import * as React from 'react';

export interface ImageCarouselProps {
    imageSrc: string;
    caption: string;
    // title: string;
}

const imageCarouselItem: React.StatelessComponent<ImageCarouselProps> = props => {
    return (
        <div className="swiper-slide">
            <div className="item item-media">
                <div className="item-image-wrapper">
                    <img src={props.imageSrc} />
                </div>

                <div className="item-content">
                    <div className="item-description">
                        <p>{props.caption}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default imageCarouselItem;