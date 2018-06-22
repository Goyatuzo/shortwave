import * as React from 'react';
import firebase from '../../firebase/firebase';

interface ExternalProps {

}

type AddGalleryProps = ExternalProps;

export class AddGalleryComponent extends React.Component<AddGalleryProps, any> {
    constructor(props: AddGalleryProps) {
        super(props);

        this.state = {
            galleryTitle : "",
            galleryDescription : "",
            galleryUrl : ""
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

    addGallery(e: React.MouseEvent<HTMLButtonElement>) {
        // console.log(e);
        console.log(this.state.galleryTitle);
        // console.log(this.randomImageUrl);



        // firebase.database().ref('items').push({
        //     name: this.randomGalleryNames[Math.floor(Math.random() * this.randomGalleryNames.length)],
        //     video: this.randomYoutubeIds[Math.floor(Math.random() * this.randomGalleryNames.length)],
        // }); 
    }

    handleGalleryTitle(e) {
        this.setState({galleryTitle: e.target.value});
    }

    handleGalleryDescription(e) {
        this.setState({galleryDescriptioin: e.target.value});
    }

    handleGalleryUrl(e) {
        this.setState({galleryUrl: e.target.value});
    }

    render() {
        return (
            <form>
                <legend>Add Gallery Form</legend>

                <div>
                    <label htmlFor="galleryTitle">Gallery Title</label>
                    <input id="galleryTitle" value={this.state.galleryTitle} onChange={this.handleGalleryTitle}/>
                </div>

                <div>
                    <label htmlFor="galleryDescription">Gallery Description</label>
                    <input id="galleryDescription" value={this.state.galleryDescription} onChange={this.handleGalleryDescription}/>
                </div>
                    
                <div>
                    <label htmlFor="galleryUrl">Image / Video URL</label>
                    <input id="galleryUrl" value={this.state.galleryUrl} onChange={this.handleGalleryUrl} />
                </div>
                
                <button onClick={this.addGallery.bind(this)}>Submit</button>
            </form>
        )
    }
}