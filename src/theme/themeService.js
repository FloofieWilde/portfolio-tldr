import { darkTheme } from "./dark.style";
import { glassTheme } from "./glass.style";

export let colors = darkTheme;

export const changeTheme = (theme) => {
    const old = colors;
    console.log(theme)
    switch (theme) {
        case 'aero':
            colors = glassTheme;
            break;
        default:
            colors = darkTheme;
            break;
    }

    return old !== colors;
}