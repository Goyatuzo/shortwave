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

    inputEl;

    componentWillMount() {
        /* Create reference to messages in Firebase Database */
        let messagesRef = firebase.database().ref('messages').orderByKey().limitToLast(100);
        messagesRef.on('child_added', snapshot => {
            /* Update React state when message is added at Firebase Database */
            let message = { text: snapshot.val(), id: snapshot.key };
            this.setState({ messages: [message].concat(this.state.messages) });
        });
    }

    addMessage(e) {
        e.preventDefault(); // <- prevent form submit from reloading the page
        /* Send the message to Firebase */
        firebase.database().ref('messages').push(this.inputEl.value);
        this.inputEl.value = ''; // <- clear the input
    }

    render() {
        return (
            <div>
                <div>
                    Hello Admin!
                </div>

                <AddGalleryComponent />
                <AdminListingComponent />
            </div>
        )
    }
}