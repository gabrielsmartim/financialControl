import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: black;
    padding: 20px;
    border-radius: 10px;
    margin-top: 20px;
    color: white;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
    padding: 10px 0;
    text-align: left;
    width: ${props => props.width ? `${props.width}px` : 'auto'};

`;