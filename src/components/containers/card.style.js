import styled from "styled-components";
import { colors } from "../../theme/themeService";

const Card = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;

    height: 100%;
    width: 80%;
    max-width: 1200px;
    min-width: 300px;
    align-self: center;

    border-radius: 8px;

    margin: 20px 0;
    padding: 30px;

    box-sizing: border-box;

    background-color: ${colors.surface};
    ${colors.glassEffectSurface}
`

export default Card;