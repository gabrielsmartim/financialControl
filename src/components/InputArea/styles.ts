import styled from 'styled-components';

export const Container = styled.div`
    background-color: black;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    color: white;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    &:focus  {
        outline: none;
    }
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
     
    &:focus  {
        outline: none;
    }
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: #64B83C;
    font-weight: bold;
    font-size: 16px;
    color: white;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #4B8A2D;

    }
`;
