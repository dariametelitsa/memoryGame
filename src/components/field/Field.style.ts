import styled from "styled-components";

const Field = styled.div `
    width: 430px;
    height: 430px;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    transform-style: preserve-3d;
    perspective: 500px;
`;

export const Style = {
    Field
}