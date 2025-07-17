import styled from "styled-components"
import Card from "../containers/card.style"
import Column from "../containers/column.style"

const Contact = () => {
    return (
        <Card id='contact'>
            <Column>
                <h1>Contact</h1>
                <h5>Let's get in touch</h5>
                <span>Email : <a href="mailto:maxime.jenn@floofies.fr">maxime.jenn@floofies.fr</a></span>
            </Column>
            <BottomBar>
                <span>Hihih</span>
                <span>Hihih</span>
                <span>Hihih</span>
                <span>Hihih</span>
            </BottomBar>
        </Card>
    )
}

const BottomBar = styled.div`
    display: flex;
    gap:20px;
    justify-content: end;
`

export default Contact