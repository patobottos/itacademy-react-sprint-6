import styled from "styled-components";

export const MainBtn = styled.button`
    height: 50px;
    width: 300px;
    border-radius: 25px;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #3E84C1;
    font-size: 1.2rem;
    margin-right: 20px;
    padding: 10px;
    
    &:hover {
        background-color: #20486B;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
`;