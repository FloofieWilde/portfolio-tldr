import styled from "styled-components";
import { colors } from "../../theme/colors.style";

const HeaderComponentStyle = styled.nav`
    display: flex;
    height: 80px;
    min-height: 80px;
    width: 100%;
    justify-content: space-around;
    list-style-type: none;
    align-items: center;

    background-color: ${colors.accentSecondary};

    >li {
        display: flex;
        height: 100%;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 700;

        &:hover {
            a {
                text-shadow:
                    -1px -1px 0 #fff,
                    0   -1px 0 #fff,
                    1px -1px 0 #fff,
                    1px  0   0 #fff,
                    1px  1px 0 #fff,
                    0    1px 0 #fff,
                    -1px  1px 0 #fff,
                    -1px  0   0 #fff;
            }
            color: ${colors.accent};
        }
    }

`

export default HeaderComponentStyle;