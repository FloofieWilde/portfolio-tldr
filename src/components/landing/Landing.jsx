import React from 'react'
import FullScreenContainer from '../containers/fullscreen-container.style'
import Row from '../containers/row.style'
import Column from '../containers/column.style'

const Landing = () => {
    return (
        <FullScreenContainer id='landing'>
            <Row>
                <Column><img></img></Column>
                <Column>
                    <h1>Hi, I'm Maxime</h1>
                    <h5>But people calls me Floofie</h5>
                    <h3>I'm a software engineer</h3>
                </Column>
            </Row>
        </FullScreenContainer>
    )
}

export default Landing