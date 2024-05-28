import './App.css'
import { Styles } from './components/Styles/Styles.ts';
import { SwitchTheme } from "./components/switchTheme/SwitchTheme.tsx";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "./components/Styles/Theme.tsx";

function App() {
const {changeTheme} = useContext(ThemeContext) as ThemeContextType;
    return (
        <Background>
            <Styles.Container>
                <Title>Memory Game</Title>
                <SwitchTheme onChange={changeTheme} />
                <button>Butn</button>
                <a href={'#1'}>asdfghj link</a>
            </Styles.Container>
        </Background>
    )
}

export default App

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.background};
`;

const Title = styled.h1 `
    color: ${props => props.theme.text};
    font-size: 3rem;
`;
