import styled, { css } from "styled-components";
import { useState } from "react";

type BilletProps = {
    emoji: string
    isOpen: () => void
};
export const Billet = ({emoji}: BilletProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <BilletStyled onClick={() => {setIsOpen(!isOpen)}} isOpen={isOpen}>
            {emoji}
        </BilletStyled>
    );
};


const BilletStyled = styled.div<{isOpen:boolean}> `
    position: relative;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    user-select: none;
    background-color: ${props => props.theme.background};
    transition: 0.3s;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: ${props => props.theme.add};
        transition: 0.3s;
        transform: rotateY(0deg);
        backface-visibility: hidden;
        
        ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotateY(180deg);
        `}
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotateY(180deg);
    `}
`;
