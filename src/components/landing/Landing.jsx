import React from 'react'
import CardStyle from '../containers/card.style'
import Row from '../containers/row.style'
import Column from '../containers/column.style'

const Landing = () => {
    return (
        <CardStyle id='landing'>
            <Row>
                <Column><img></img></Column>
                <Column>
                    <h1>Hi, I'm Maxime</h1>
                    <h5>But people calls me Floofie</h5>
                    <h3>I'm a software engineer</h3>
                </Column>
            </Row>
        </CardStyle>
    )
}

export default Landing