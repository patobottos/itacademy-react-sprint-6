import styled from "styled-components";

export const Paragraph = styled.div`
    font-family: sans-serif;
    font-size: 0.9rem; 
    border: 0.5px solid #7F9DA2;
    border-radius: 25px;
    padding: 10px;
    text-align: center;
    margin: 20px; 
    
    background-color: ${({ isActive }) => isActive ? `#6A87A1` : '#FFFFFF'}
`;
