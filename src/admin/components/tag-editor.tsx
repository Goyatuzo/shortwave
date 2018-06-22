import * as React from 'react';
import firebase from '../../firebase/firebase';
import { ITag, IMediaItem } from '../../common/gallery-data';

interface ExternalProps {
    galleryKey: string;
}

type TagEditorProps = ExternalProps;

interface TagEditorState {
    userInput: string;
    availableTags: ITag[];
}

export class TagEditorComponent extends React.Component<TagEditorProps, TagEditorState> {
    constructor(props: TagEditorProps) {
        super(props);

        this.state = {
            userInput: "",
            availableTags: [],
        }
    }

    componentWillMount() {
        firebase.database().ref('tags').on("child_added", snapshot => {
            this.setState({
                availableTags: [...this.state.availableTags, { key: snapshot.key, tag: snapshot.val() }]
            });
        });
    }

    textInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            userInput: e.target.value
        });
    }

    addTag(e: React.MouseEvent<HTMLButtonElement>) {
        firebase.database().ref('tags').push(this.state.userInput);
        const gallery = firebase.database().ref(`items/${this.props.galleryKey}`);

        gallery.once("value", snapshot => {
            const existingTags = (snapshot.val() as IMediaItem).tags || [];
            gallery.update({ tags: [...existingTags, this.state.userInput] });
        });
    }

    clickTag(e: React.ChangeEvent<HTMLSelectElement>) {
        const gallery = firebase.database().ref(`items/${this.props.galleryKey}`);

        gallery.once("value", snapshot => {
            const existingTags = (snapshot.val() as IMediaItem).tags || [];
            gallery.update({ tags: [...existingTags, e.target.value] });
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.userInput} onChange={this.textInputChange.bind(this)} /><br />
                <select onChange={this.clickTag.bind(this)}>
                    {
                        this.state.availableTags.map(tag => <option key={tag.key}>{tag.tag}</option>)
                    }
                </select><br />

                <button onClick={this.addTag.bind(this)}>Add Tag</button><br /><br />
            </div>
        )
    }
}