import styled from "styled-components";
import { Style } from "./switchTheme/SwitchTheme.style.ts";

export namespace Styles {
    export const Background = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.background};

        & ${Style.Switch} {
            position: absolute;
            right: 20px;
            top: 20px;
        }
    `;

    export const Container = styled.div`
        position: relative;
        padding: 40px 60px;
        display: flex;
        gap: 30px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.field};
    `;


    export const Title = styled.h1`
        color: ${props => props.theme.text};
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
    `;
}