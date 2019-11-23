import React, { Component } from 'react';
import Moment from 'react-moment';

export default class Footer extends Component {

    render() {
        const date = new Date();
        return (
            <div id="footer" className="ifooter">
                <div className="panel">
                    <div className="copy">
                        © <Moment format="YYYY">{date}</Moment> Armenian Code Academy. All rights reserved.
                    </div>
                </div>
            </div>
        );
    }
}