import * as React from 'react';
import { TagEditorComponent } from '../components/tag-editor';
import firebase from '../../firebase/firebase';

interface ExternalProps {
    youtubeId: string;
    caption: string;
    tags: string[];
    galleryKey: string;
}

type GalleryItemProps = ExternalProps;

export const GalleryItemView: React.StatelessComponent<GalleryItemProps> = props => {
    return (
        // Temporary className
        <div className="admin-form">
            <img src={`https://img.youtube.com/vi/${props.youtubeId}/0.jpg`} />
            <p>{props.caption}</p>
            <p>{props.tags}</p> 
            <TagEditorComponent galleryKey={props.galleryKey} />
        </div>
    )
}
