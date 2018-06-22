import * as React from 'react';
import firebase from '../../firebase/firebase';
import { ITag, IVideoItem } from '../../common/gallery-data';

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
            availableTags: []
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
            const existingTags = (snapshot.val() as IVideoItem).tags || [];
            gallery.update({ tags: [...existingTags, this.state.userInput] });
        });
    }

    selectedTag(e: React.MouseEvent<HTMLElement>) {
        const gallery = firebase.database().ref(`items/${this.props.galleryKey}`);

        gallery.once("value", snapshot => {
            const existingTags = (snapshot.val() as IVideoItem).tags || [];
            gallery.update({ tags: [...existingTags, this.state.userInput] });
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.userInput} onChange={this.textInputChange.bind(this)} />

                {
                    this.state.availableTags.map(tag => <p key={tag.key} onClick={this.selectedTag.bind(this)}>{tag.tag}</p>)
                }

                <button onClick={this.addTag.bind(this)}>Add Tag</button>
            </div>
        )
    }
}