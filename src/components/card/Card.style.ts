import styled, { css } from "styled-components";

export const BilletStyled = styled.div<{ $isOpen: boolean, $isMatch: boolean }>`
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
    transform: rotateY(0deg);

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: ${props => props.theme.add};
        transition: 0.3s;
        transform: rotateY(0deg);
        backface-visibility: hidden;
        opacity: 1;

        ${props => props.$isOpen && css<{ $isOpen: boolean }>`
            transform: rotateY(180deg);
        `}

        ${props => props.$isMatch && css<{ $isMatch: boolean }>`
            opacity: 0;
        `}
    }
;

    ${props => props.$isOpen && css<{ $isOpen: boolean }>`
        z-index: 99;
        transform: rotateY(180deg);
    `}

    ${props => props.$isMatch && css<{ $isMatch: boolean }>`
        outline: 3px solid gold;
        transform: rotateY(180deg);
        background-color: ${props => props.theme.field};
    `}
`;