import React from 'react'
import FullScreenContainer from '../containers/fullscreen-container.style'
import Row from '../containers/row.style'
import Column from '../containers/column.style'
import Card from '../containers/card.style'
import ColumnCentered from '../containers/column-centered.style'

const Landing = () => {
    return (
        <FullScreenContainer id='landing'>
            <Card>
                <Row>
                    <Column><img></img></Column>
                    <ColumnCentered>
                        <h1>Hi, I'm Maxime</h1>
                        <h3>I'm a software engineer</h3>
                        <span>I create solutions for your problems</span>
                        <span>I mean whatever but I'm not your therapist</span>
                    </ColumnCentered>
                </Row>
            </Card>
        </FullScreenContainer>
    )
}

export default Landing