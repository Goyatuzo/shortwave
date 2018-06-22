import * as React from 'react';

interface ThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
}

export const ThumbnailComponent: React.SFC<ThumbnailProps> = (props: ThumbnailProps) => {
    const iconSrc = "../src/imgs/VIDEO.svg";
    const { onClick, imgSrc } = props;
    return (
        <div className="thumbnail" onClick={onClick}>
            <img className="thumbnail-background" src={imgSrc} />
            <div className="thumbnail-details">
                <img className="thumbnail-icon" src={iconSrc} />
                <h3>Deftones</h3>
                <h4>September 2018</h4>
            </div>
        </div>
    );
}
