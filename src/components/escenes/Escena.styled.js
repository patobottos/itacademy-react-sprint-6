import styled from "styled-components";

export const Paragraph = styled.div`
    border: 1px solid black;
    border-radius: 30px;
    padding: 10px;
    text-align: center;
    margin: 20px; 

    &.isActive {
        background-color: #6A87A1;
    }
`;

export const ParagraphContainer = styled.div`
    text-align: center;
    border: 1px solid pink;
`;

