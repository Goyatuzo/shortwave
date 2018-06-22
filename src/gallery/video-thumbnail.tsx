import * as React from 'react';

interface VideoThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
}

export const VideoThumbnailComponent: React.SFC<VideoThumbnailProps> = (props: VideoThumbnailProps) => {
    const videoButtonSrc = "../src/imgs/play-circle.svg";
    const { onClick, imgSrc } = props;
    return (
        <div className="video-thumbnail" onClick={onClick}>
            <img className="video-thumbnail-background" src={imgSrc} />
            <img className="video-thumbnail-icon" src={videoButtonSrc} />
        </div>
    );
}