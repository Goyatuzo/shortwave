import * as React from 'react';

import ImageCarouselItem from './image-carousel-item';
import { AlbumImageData } from '../common/album';

export interface ImageCarouselContainerProps {
    medias: AlbumImageData[];
}

const imageCarouselContainer: React.StatelessComponent<ImageCarouselContainerProps> = props => {
    
    return (
        <React.Fragment>
            {
                props.medias.map((image: AlbumImageData) => <ImageCarouselItem caption={image.caption} key={image.src+ image.caption} imageSrc={image.src} />)
            }
        </React.Fragment>
    );
}

export default imageCarouselContainer;