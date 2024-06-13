import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 18px;
    color: white;
    background: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.4s background ease-in;
    
    &:hover {
        background-color: white;
        border: 2px solid black;
        color: black;
        transition: 0.2s background ease-in;
    }
`;

export const OutlineButton = styled(Button)`
background-color: white;
border: 2px solid black;
color: black;
  
  &:hover {
        background-color: black;
        border: 2px solid transparent;
        color: white;
        border: 2px solid transparent;
    }
    
`;