import styled from "styled-components";
import { colors } from "../../theme/colors.style";

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;  
    background-color: ${colors.background};
    color: ${colors.text};
`

export default CardStyle;