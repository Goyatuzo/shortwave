import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';

interface VideoThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
    title: string; // Deftones
    dateString: string; // September 2018
}

export const VideoThumbnailComponent: React.SFC<VideoThumbnailProps> = (props: VideoThumbnailProps) => {
    const iconSrc = "../src/imgs/VIDEO.svg";
    return <ThumbnailComponent {...props} iconSrc={iconSrc} />;
}