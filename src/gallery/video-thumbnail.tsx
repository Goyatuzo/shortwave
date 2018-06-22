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
    return <ThumbnailComponent {...props} iconSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMCAxMS4zNjM2VjBMMTAuOTA5MSA1LjkwOTA5TDAgMTEuMzYzNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjM2MzYgMTQuNTQ1NSkiIGZpbGw9ImJsYWNrIi8+PC9zdmc+" />;
}