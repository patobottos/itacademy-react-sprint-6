import styled from "styled-components";

export const Paragraph = styled.div`
    font-family: sans-serif;
    font-size: 1rem; 
    border: 1px solid #003B46;
    border-radius: 30px;
    padding: 10px;
    text-align: center;
    margin: 20px; 
    
    background-color: ${({ isActive }) => isActive ? `#6A87A1` : '#FFFFFF'}
`;
