import * as React from 'react';
import firebase from '../../firebase/firebase';

interface ExternalProps {
    youtubeId: string;
    caption: string;
}

type GalleryItemProps = ExternalProps;

export const galleryItem: React.StatelessComponent<GalleryItemProps> = props => {
    return (
        <div>
            <img src={`https://img.youtube.com/vi/${props.youtubeId}/0.jpg`} />
            <p>{props.caption}</p>
        </div>
    )
}
