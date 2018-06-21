import * as React from 'react';

interface ExternalProps {

}

type AdminProps = ExternalProps;

export class AdminComponent extends React.Component<AdminProps, null> {
    constructor(props: AdminProps) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello Admin!
            </div>
        )
    }
}
