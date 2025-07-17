import React from 'react'
import FullScreenContainer from '../containers/fullscreen-container.style'
import Card from '../containers/card.style'
import styled from 'styled-components'
import Row from '../containers/row.style'
import Column from '../containers/column.style'
import { colors } from '../../theme/colors.style'
import ColumnCentered from '../containers/column-centered.style'

const WhoAmI = () => {
    return (
        <FullScreenContainer id='projects'>
            <Card>
                <h1>Who Am I ?</h1>
                <Row style={{ flex: 1 }}>
                    <Column>&nbsp;</Column>
                    <ColumnCentered>
                        <h3>My Techs</h3>
                        <RowTag>
                            <Tag>Angular</Tag>
                            <Tag>React</Tag>
                            <Tag>Feur</Tag>
                            <Tag>Rust</Tag>
                            <Tag>Angular</Tag>
                            <Tag>Project Management</Tag>
                            <Tag>Test tag trop long</Tag>
                            <Tag>Wrapper</Tag>
                            <Tag>Wrap</Tag>
                        </RowTag>
                    </ColumnCentered>
                </Row>
            </Card>
        </FullScreenContainer>
    )
}

const Tag = styled.span`
    background-color: ${colors.background};
    font-size: 1.2rem;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: bold;
`

const RowTag = styled(Row)`
    flex-wrap: wrap;
`
export default WhoAmI