import './App.css'
import { SwitchTheme } from "./components/switchTheme/SwitchTheme.tsx";
import { Styles } from "./components/App.style.ts";
import { useContext, useState } from "react";
import { ThemeContext, ThemeContextType } from "./components/Styles/Theme.tsx";
import { Field } from "./components/field/Field.tsx";

function App() {
    const {changeTheme} = useContext(ThemeContext) as ThemeContextType;
    const [reset, setReset] = useState(true);


    return (
        <Styles.Background>
            <Styles.Container>
                <Styles.Title>Memory Game</Styles.Title>
                <SwitchTheme onChange={changeTheme}/>
                <Field></Field>
                <Styles.Button onClick={() => setReset(!reset)}>Reset game</Styles.Button>
            </Styles.Container>
        </Styles.Background>
    )
}

export default App



