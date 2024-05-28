import { Style } from "./SwitchTheme.style.ts";

export const SwitchTheme = ({onChange}: {onChange: ()=>void}) => {
    return (
        <Style.Switch>
            <Style.Label>
                <input onChange={onChange} type="checkbox"/>
                <Style.Span></Style.Span>
                <Style.B></Style.B>
            </Style.Label>
        </Style.Switch>
    );
};