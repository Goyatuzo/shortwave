import * as React from 'react';
import firebase from '../../firebase/firebase';

interface ExternalProps {

}

type AddMediaItemProps = ExternalProps;

export class AddMediaItemComponent extends React.Component<AddMediaItemProps, any> {
    constructor(props: AddMediaItemProps) {
        super(props);

        this.state = {
            mediaItemTitle : "",
            mediaItemDescription : "",
            mediaItemUrl : ""
        };
    }

    randomGalleryNames = [
        'Marko',
        'Berenice',
        'Yaroslav',
        'Ratan',
        'Mayeso',
        'Albert'
    ];

    randomImageUrl = [
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141205_03.jpg',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141205_02.jpg',
        'http://coudal.com/lyt_gifs/141205_05.gif',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141205_08.jpg',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141107a_01.jpg',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141107a_03.jpg',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141107b_04.jpg',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141107b_06.jpg',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141017_01.jpg',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141017_03.jpg',
        'http://s3.amazonaws.com/layer-tennis-staging-assets/volleys/_volleyLarge/141017_08.jpg'
    ]

    randomYoutubeIds = [
        'MD61bddZtbg',
        '9No-FiEInLA',
        'OxQ3LiEKqtY',
        'i5qOzqD9Rms',
        'KHQhp2cGZtE'
    ]

    addMediaItem(e: React.MouseEvent<HTMLButtonElement>) {
        // console.log(e);
        console.log(this.state.mediaItemTitle);
        // console.log(this.randomImageUrl);



        // firebase.database().ref('items').push({
        //     name: this.randomGalleryNames[Math.floor(Math.random() * this.randomGalleryNames.length)],
        //     video: this.randomYoutubeIds[Math.floor(Math.random() * this.randomGalleryNames.length)],
        // }); 
    }

    handleMediaItemTitle(e) {
        this.setState({mediaItemTitle: e.target.value});
    }

    handleMediaItemDescription(e) {
        this.setState({mediaItemDescriptioin: e.target.value});
    }

    handleMediaItemUrl(e) {
        this.setState({mediaItemUrl: e.target.value});
    }

    render() {
        return (
            <form>
                <legend>Add Media Item Form</legend>

                <div>
                    <label htmlFor="mediaItemTitle">Gallery Title</label>
                    <input id="mediaItemTitle" value={this.state.galleryTitle} onChange={this.handleGalleryTitle}/>
                </div>

                <div>
                    <label htmlFor="mediaItemDescription">Gallery Description</label>
                    <input id="mediaItemDescription" value={this.state.galleryDescription} onChange={this.handleGalleryDescription}/>
                </div>
                    
                <div>
                    <label htmlFor="mediaItemUrl">Image / Video URL</label>
                    <input id="mediaItemUrl" value={this.state.galleryUrl} onChange={this.handleGalleryUrl} />
                </div>
                
                <button onClick={this.addMediaItem.bind(this)}>Submit</button>
            </form>
        )
    }
}