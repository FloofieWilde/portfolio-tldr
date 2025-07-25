import Card from '../containers/card.style'
import styled from 'styled-components'
import Row from '../containers/row.style'
import Column from '../containers/column.style'
import { colors } from '../../theme/themeService'
import ColumnCentered from '../containers/column-centered.style'
import skills from '../../data/skills.data.json'
import FullScreenContainer from '../containers/fullscreen-container.style'

const WhoAmI = () => {
    return (
        <FullScreenContainer id='projects'>
            <Card>
                <h1>Who Am I ?</h1>
                <Row style={{ flex: 1 }}>
                    <Column>&nbsp;</Column>
                    <ColumnCentered>
                        {skills.map((category, index) => (
                            <div key={index}>
                                <h3>{category.skillCategory}</h3>
                                <RowTag>
                                    {category.skills.map((skill, idx) => (
                                        <Tag key={idx} className={skill.highlight ? 'accent' : ''}>
                                            {skill.name}
                                        </Tag>
                                    ))}
                                </RowTag>
                            </div>
                        ))}
                    </ColumnCentered>
                </Row>
            </Card>
        </FullScreenContainer>
    )
}

const Tag = styled.span`
    background: ${colors.backgroundLight};
    font-size: 1.2rem;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: bold;
    ${colors.glassEffect};

    &.accent {
        background-color: ${colors.accent};
    }
`

const RowTag = styled(Row)`
    flex-wrap: wrap;
    flex: 0;
`
export default WhoAmI