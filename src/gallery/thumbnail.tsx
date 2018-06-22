import * as React from 'react';

interface ThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
}

export const ThumbnailComponent: React.SFC<ThumbnailProps> = (props: ThumbnailProps) => {
    const iconSrc = "../src/imgs/play-circle.svg";
    const { onClick, imgSrc } = props;
    return (
        <div className="thumbnail" onClick={onClick}>
            <img className="thumbnail-background" src={imgSrc} />
            <img className="thumbnail-icon" src={iconSrc} />
        </div>
    );
}
