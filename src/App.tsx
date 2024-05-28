import './App.css'
import { SwitchTheme } from "./components/switchTheme/SwitchTheme.tsx";
import { Styles } from "./components/App.style.ts";
import { memo, useContext } from "react";
import { ThemeContext, ThemeContextType } from "./components/Styles/Theme.tsx";
import { Field } from "./components/field/Field.tsx";

function App() {
    const {changeTheme} = useContext(ThemeContext) as ThemeContextType;

    const GameField = memo(Field);

    return (
        <Styles.Background>
            <Styles.Container>
                <Styles.Title>Memory Game</Styles.Title>
                <SwitchTheme onChange={changeTheme}/>
                <GameField/>
            </Styles.Container>
        </Styles.Background>
    )
}

export default App



