import * as React from 'react';
import firebase from '../firebase/firebase';
import { AddGalleryComponent } from './components/add-gallery';
import { AdminListingComponent } from './components/admin-listing';

interface ExternalProps {

}

type AdminProps = ExternalProps;

export class AdminComponent extends React.Component<AdminProps, any> {
    constructor(props: AdminProps) {
        super(props);
        this.state = { messages: [] }; // <- set up react state
    }

    render() {
        return (
            <div>
                <AddGalleryComponent />
                <AdminListingComponent />
            </div>
        )
    }
}