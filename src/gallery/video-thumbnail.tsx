import * as React from 'react';

interface VideoThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
}

export const VideoThumbnailComponent: React.SFC<VideoThumbnailProps> = (props: VideoThumbnailProps) => {
    const videoButtonSrc = "../src/imgs/play-circle.svg";
    const { onClick, imgSrc } = props;
    return (
        <div className="thumbnail" onClick={onClick}>
            <img className="thumbnail-background" src={imgSrc} />
            <img className="thumbnail-icon" src={videoButtonSrc} />
        </div>
    );
}
