import React, {Component} from 'react';
// import { Document, Page } from 'react-pdf';

import ResumePic from './ResumePic.jpg';

class Resume extends Component {
    render() {
        return(
            <div className = "res">
                <img 
                    src = {ResumePic}
                    alt = "resume-pic"
                    className = "resume-img"
                />
            </div>
        )
    }
}

export default Resume;