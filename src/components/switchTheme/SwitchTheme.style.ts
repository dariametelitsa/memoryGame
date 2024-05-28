import styled from "styled-components";
import Sun from './../../assets/sun.svg';
import Moon from './../../assets/moon.svg';

const Switch = styled.div<{ theme: string }> `
`;

const Label = styled.label `
    position: relative;
    width: 80px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 75px;
    //background-color: ${(props) => props.theme.add};
    //box-shadow: 0 0 0 1px ${(props) => props.theme.add};
    cursor: pointer;
    border: 1px solid black;
    
    & input {
        appearance: none;
    }
`;


const B = styled.b `
    position: absolute;
    inset: 0;
    background-color: rgba(163, 195, 239, 0.8);
    border-radius: 75px;
    transition: 0.5s ease-in-out;
    //box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.75);

    input:checked ~ & {
        background-color: #012835;
    }
`;

const Span = styled.span `
    position: absolute;
    left: 0;
    width: 30px;
    height: 30px;
    background-image: url(${Sun});
    background-size: auto 30px;
    z-index: 99;
    transition: 1.5s;
    filter: drop-shadow(0 0 5px rgba(248, 227, 156, 0.8));

    input:checked ~ & {
        transform: translateX(48px) rotate(360deg);
        background-image: url(${Moon});
        filter: drop-shadow(0 0 5px rgba(180, 209, 248, 0.8));
    }
`;


export const Style = {
    Switch,
    Label,
    B,
    Span
}