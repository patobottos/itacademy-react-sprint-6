import styled from "styled-components";

export const MainBtn = styled.button`
    height: 40px;
    width: 170px;
    cursor: pointer;
    color: #070B0D;
    background-color:#66A5AD;
    font-family: "Helvetica", sans-serif;
    font-size: 0.8rem;
    margin-right: 20px;
    padding: 5px 15px;
    border: 0.1px solid #66A5AD;
    border-radius: 15px;
    text-align: center;

    &:hover {
        background-color: #4A6678;
        color: #CEDEE4;
    }

    &:active {
        background-color: #003B46;
        color: #CEDEE4;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
`;