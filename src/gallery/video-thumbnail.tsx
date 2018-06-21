import * as React from 'react';

interface VideoThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
    videoButtonSrc: string;
}

export const VideoThumbnailComponent: React.SFC<VideoThumbnailProps> = (props: VideoThumbnailProps) => {
        const { onClick, imgSrc, videoButtonSrc } = props;
        return (
            <div onClick={onClick}>
                <img src={imgSrc} />
                <img src={videoButtonSrc} />
            </div>
        );
    }