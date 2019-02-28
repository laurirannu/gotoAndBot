import React from 'react';
import '../Header/Header.css'

class Header extends React.Component {
    render () {
        return (
            <div className = "header">
                <img src={require("../icons/robot.jpg")} alt = "logo" className="pic" />
                <p className="name">gotoAndBot</p>
            </div>
        )
    }
}

export default Header;