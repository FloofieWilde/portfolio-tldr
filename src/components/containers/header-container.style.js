import styled from "styled-components";
import { colors } from "../../theme/themeService";

const HeaderComponentStyle = styled.nav`
    display: flex;
    height: 80px;
    min-height: 80px;
    width: 100%;
    justify-content: space-around;
    list-style-type: none;
    align-items: center;
    ${colors.glassEffect}

    background-color: ${colors.accentSecondary};

    >li {
        display: flex;
        height: 100%;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 700;
        box-sizing: border-box;

        transition: all .15s ease-in-out;

        a {
            position: relative;
            &::after {
                transition: all .15s ease-in-out;
                content: '';
                position: absolute;
                bottom: -2px;
                left:0;
                border-bottom: dashed 2px ${colors.accent};
                width: 100%; 
                opacity: 0;
            }
        }

        &:hover {
            transition: all .15s ease-in-out;
            a {
                &::after {
                    transition: all .15s ease-in-out;
                    opacity: 1;
                }
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
            color: ${colors.accentSecondary};
        }
    }

`

export default HeaderComponentStyle;