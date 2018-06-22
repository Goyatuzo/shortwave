import * as React from 'react';
import firebase from '../../firebase/firebase';
import { IVideoItem } from '../../common/gallery-data';
import { GalleryItemView } from '../views/gallery-item';
import { TagEditorComponent } from './tag-editor';

interface ExternalProps {

}

type AdminListingProps = ExternalProps;

interface AdminListingState {
    items: IVideoItem[];
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
            const value: IVideoItem = snapshot.val();

            this.setState({
                items: [...this.state.items, { key: snapshot.key, name: value.name, video: value.video, tags: value.tags }]
            });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.items.map(item => <GalleryItemView key={item.key} caption={item.name} youtubeId={item.video} tags={item.tags} />)
                }
            </div>
        )
    }
}