import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';

class Landingpage extends Component {
    render() {
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className = "landing-grid"> 
                    <Cell col={12}> 
                    <img 
                    src = "https://i.ibb.co/sWVc3DF/321-DA054-AB0-B-4-FE8-B9-FE-A0140-AC19-AAD.jpg"
                    alt = "avatar"
                    className = "avatar-img"
                    />
                    <div className="banner-text">
                        <h1>Full Stack Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Java | JavaScript | React | Python | NodeJS | Express | MongoDB</p>

                        <div className="social-links">

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/gursewak00/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="https://github.com/gursewak1997" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Email */}
                        <a href="mailto:gursmangat@gmail.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-envelope-square" aria-hidden="true" />
                        </a>
                        </div>
                    </div>
                    </Cell>
                </Grid>
            </div> 
        )
    }
}

export default Landingpage;