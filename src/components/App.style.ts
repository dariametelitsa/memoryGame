import styled from "styled-components";

export namespace Styles {
    export const Background = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.background};
        
        
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

    export const Button = styled.button`
        color: ${props => props.theme.text};
        font-size: 1rem;
        padding: 10px 20px;
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.background};
        text-transform: uppercase;
        border: 2px solid transparent;
        font-weight: bold;
        border-radius: 6px;
        transition: 0.3s;

        &:hover {
            color: ${props => props.theme.accent};
            background-color: ${props => props.theme.background};
            border: 2px solid ${props => props.theme.accent};
        }
    `;
}