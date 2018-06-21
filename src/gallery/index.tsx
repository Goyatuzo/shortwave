import * as React from 'react';

interface ExternalProps {

}

type GalleryProps = ExternalProps;

export class GalleryComponent extends React.Component<GalleryProps, null> {
    constructor(props: AppProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello World!
            </div>
        )
    }
}
