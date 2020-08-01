import React, { Component } from 'react';
import './Ai.css';
import '../assets/BACKGROUND.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'


export default class Aipage extends Component {
    render() {
        return (
            <div>
            < div className="header" style={ { fontWeight: 'bolder' } }>
                 <h1><b>Artificial Intelligence</b></h1>
                 <h3><b>(Data has a better idea)</b></h3>
            </div>
            <div className="content" >
            <div className="left" >
                <h1 style={{fontSize: 25, fontWeight: 'bolder' }}>AI SEARCH FOOD SERVICE</h1>
                <div className="subtext">
                <h6 className="text-space"><FontAwesomeIcon icon={ faCog } style={{ color: 'grey' }}/> <span className="left-text">Click or upload a pic of the dish you want to eat!</span></h6>
                <h6 className="text-space"><FontAwesomeIcon icon={ faCog } style={{ color: 'grey' }}/> <span className="left-text">Our AI is <span style={{color: '#FF6530' }}>Indian food centric</span> it can easily detect indian food.</span></h6>
                <h6 className="text-space"><FontAwesomeIcon icon={ faCog } style={{ color: 'grey' }}/> <span className="left-text">As millions of food pictures available on our AI you can click photo from any angle you want.</span></h6>
                </div>

                </div>

                <div className="right">
                    <div className="triangle-left"></div>
                    <img src={require("./Rectangle.png")} width="500em" height="500em" alt="naniz" />
                </div>
            </div>
       </div>
        )
    }
}


