import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';

interface AlbumThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
    title: string; // Deftones
    dateString: string; // September 2018
}

export const AlbumThumbnailComponent: React.SFC<AlbumThumbnailProps> = (props: AlbumThumbnailProps) => {
    const iconSrc = "../src/imgs/play-circle.svg";
    return <ThumbnailComponent {...props} iconSrc={iconSrc} />;
}