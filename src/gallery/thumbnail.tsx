import * as React from 'react';

interface ThumbnailProps {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    imgSrc: string;
    iconSrc: string;
    title: string;
    dateString: string;
}

export const ThumbnailComponent: React.SFC<ThumbnailProps> = (props: ThumbnailProps) => {
    const { onClick, imgSrc, iconSrc } = props;
    return (
        <div className="thumbnail" onClick={onClick}>
            <img className="thumbnail-background" src={imgSrc} />
            <div className="thumbnail-details">
                <img className="thumbnail-icon" src={iconSrc} />
                <h3>{props.title}</h3>
                <h4>{props.dateString}</h4>
            </div>
        </div>
    );
}
