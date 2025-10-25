import { Theme, Themes } from "../models/theme";

const light: Theme = {
    name: 'light',
    colors: {
        backgroundPrimary: '#4682b4',
        backgroundSecondary: '#ffffff'
    }
}

const dark: Theme = {
    name: 'dark',
    colors: {
        backgroundPrimary: '#000000',
        backgroundSecondary: '#242424'
    }
}

export const themes: Themes = { light, dark }
