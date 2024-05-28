import { ThemeProvider } from "styled-components";
import { createContext, useContext, useMemo, useState } from "react";

export type ThemeContextType = {
    theme: string
    changeTheme: () => void
};
type Theme = {
    text: string
    background: string
    field: string
    accent: string
    add: string
    attention: string
};
type ThemeProps = {
    children: React.ReactNode
};

const themeLight: Theme = {
    text: "#1c1a27",
    background: "#f9f9f9",
    field: "#d3d3d3",
    accent: '#6750a4',
    add: '#625b71',
    attention: '#b3261e',
};

const themeDark: Theme = {
    text: "#fbfafe",
    background: '#1c1a27',
    field: "#717171",
    accent: '#d0bcff',
    add: '#ccc2dc',
    attention: '#f2b8b5',
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme (prev => prev === 'light' ? 'dark' : 'light');
    };
    const contextValue = useMemo(() => ({theme, changeTheme}), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}


const Theme = ({children}: ThemeProps) => {
    const theme = useContext(ThemeContext) as ThemeContextType;

    return (
        <ThemeProvider theme={theme.theme === 'light' ? themeLight : themeDark}>
            {children}
        </ThemeProvider>)
};

export default Theme;