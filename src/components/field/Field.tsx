import { Style } from "./Field.style.ts";
import { Billet } from "../billet/Billet.tsx";

export const Field = () => {
    const emojis: string[]  = ['🥗','🌭','🍟','🍔','🍕','🍳','🍪','🍫'];
    const gameValue = emojis.concat(emojis).sort(() => (Math.random() > 0.5) ? -1 : 1);

    return (
        <Style.Field>
            {gameValue.map(el => {
                return (<Billet emoji={el} isOpen={()=> {}}/>)
            })}
        </Style.Field>
    );
};