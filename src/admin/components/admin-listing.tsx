import * as React from 'react';
import firebase from '../../firebase/firebase';
import { IMediaItem } from '../../common/gallery-data';
import { GalleryItemView } from '../views/gallery-item';
import { TagEditorComponent } from './tag-editor';

interface ExternalProps {

}

type AdminListingProps = ExternalProps;

interface AdminListingState {
    items: IMediaItem[];
}

export class AdminListingComponent extends React.Component<AdminListingProps, AdminListingState> {
    constructor(props: AdminListingProps) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentWillMount() {
        let itemsRef = firebase.database().ref('items');

        itemsRef.on('child_added', snapshot => {
            const value: IMediaItem = snapshot.val();

            this.setState({
                items: [...this.state.items, { key: snapshot.key, mediaItemTitle: value.mediaItemTitle, mediaItemDescription: value.mediaItemDescription, mediaItemUrl: value.mediaItemUrl, tags: value.tags }]
            });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.items.map(item => <GalleryItemView key={item.key} caption={item.mediaItemTitle} youtubeId={item.mediaItemUrl} tags={item.tags} galleryKey={item.key}/>)
                }
            </div>
        )
    }
}