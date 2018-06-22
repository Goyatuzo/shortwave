import * as React from 'react';

export interface VideoCarouselItemProps {
    youtubeId: string;
    caption?: string;
}

export const VideoItemView: React.StatelessComponent<VideoCarouselItemProps> = props => {
    return (
        <div className="swiper-slide">
            <div className="item item-media">
                <div className="item-image-wrapper">
                    <div className="item-embed">
                        <iframe src={`https://www.youtube.com/embed/${props.youtubeId}?enablejsapi=1`} frameBorder="0" allowFullScreen></iframe>
                    </div>
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