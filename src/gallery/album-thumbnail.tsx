import * as React from 'react';
import { ThumbnailComponent } from './thumbnail';

interface AlbumThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
    title: string; // Deftones
    dateString: string; // September 2018
}

export const AlbumThumbnailComponent: React.SFC<AlbumThumbnailProps> = (props: AlbumThumbnailProps) => {
    const iconSrc = "../src/imgs/GALLERY.svg";
    return <ThumbnailComponent {...props} iconSrc="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMTAgMEgxLjgxODE4QzAuODE4MTgyIDAgMCAwLjgxODE4MiAwIDEuODE4MThWOS4wOTA5MUMwIDEwLjA5MDkgMC44MTgxODIgMTAuOTA5MSAxLjgxODE4IDEwLjkwOTFIMTBDMTEgMTAuOTA5MSAxMS44MTgyIDEwLjA5MDkgMTEuODE4MiA5LjA5MDkxVjEuODE4MThDMTEuODE4MiAwLjgxODE4MiAxMSAwIDEwIDBaTTEuODE4MTggOC4xODE4MkwzLjU0NTQ1IDUuNDU0NTVMNC41NDU0NSA3LjE4MTgyTDYuOTA5MDkgMy4zNjM2NEwxMCA4LjE4MTgySDEuODE4MThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4xODE4IDEwLjkwOTEpIiBmaWxsPSIjMTMwQjJEIi8+PHBhdGggZD0iTTEuODE4MTggMEgwVjEwQzAgMTEgMC44MTgxODIgMTEuODE4MiAxLjgxODE4IDExLjgxODJIMTAuOTA5MVYxMEgxLjgxODE4VjBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC41NDU1IDEzLjYzNjQpIiBmaWxsPSIjMTMwQjJEIi8+PHBhdGggZD0iTTEuODE4MTggMEgwVjEwQzAgMTEgMC44MTgxODIgMTEuODE4MiAxLjgxODE4IDExLjgxODJIMTAuOTA5MVYxMEgxLjgxODE4VjBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC45MDkxIDE3LjI3MjcpIiBmaWxsPSIjMTMwQjJEIi8+PC9zdmc+" />;
}