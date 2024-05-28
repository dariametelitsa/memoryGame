import styled, { css, keyframes } from "styled-components";

const Button = styled.button`
    position: relative;
    color: ${props => props.theme.text};
    font-size: 1rem;
    padding: 10px 20px;
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.background};
    filter: drop-shadow(0, 0, 15px, rgba(0, 0, 0, 0.5));
    text-transform: uppercase;
    border: 2px solid transparent;
    font-weight: bold;
    border-radius: 6px;
    transition: 0.3s;
    z-index: 99;

    &:hover {
        color: ${props => props.theme.accent};
        background-color: ${props => props.theme.background};
        border: 2px solid ${props => props.theme.accent};
    }
`;

const Circle = styled.i <{$x: string, $y: string, $duration: string}>`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    pointer-events: none;
    background-color: ${props => props.theme.accent};
    z-index: -1;
    
    ${({$x, $y,$duration }) => {
    const animate = keyframes`
            0% {
                opacity: 1;
                transform: translate(0, 0);
            }
            100% {
                opacity: 0;
                transform: translate(${$x}, ${$y});
            }
        `;

    return css`
            animation: ${animate} ${$duration} ease-out forwards;
        `;
}}
    
    &:nth-child(even) {
        background: transparent;
        border: 1px solid ${props => props.theme.accent};
    }
`;

export const Style = {
    Button,
    Circle
};

