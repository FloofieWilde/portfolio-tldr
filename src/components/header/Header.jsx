import React from 'react'
import HeaderComponentStyle from '../containers/header-container.style'

const Header = () => {
    return (
        <HeaderComponentStyle>
            <li>
                <a href='#landing'>Home</a>
            </li>
            <li>
                <a href='#me'>Who-Why</a>
            </li>
            <li>
                <a href='#projects'>What</a>
            </li>
            <li>
                <a href='#contact'>Where</a>
            </li>
        </HeaderComponentStyle>
    )
}

export default Header