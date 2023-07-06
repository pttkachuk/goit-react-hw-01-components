import styled from 'styled-components';

export const TransitionTable = styled.table`
width: 400px;
margin-left: auto;
margin-right: auto;
border-radius: 5px;
margin-bottom: 20px;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const TransitionHead = styled.thead`
border: 0px solid #b5b5b5;
background-color: #00bcd5;
color: #ffffff;
text-transform: uppercase;
`;

export const TransitionTitle = styled.th`
width: 33.3%;
padding: 15px 5px;
`;

export const TransitionInfo = styled.td`
padding: 15px 5px;
text-transform: capitalize;
transition: background-color 250ms linear;
cursor: pointer;

&:hover{
    background-color: #c9dcdf;
  transition: background-color 250ms linear;
}
`;

export const TransitionRow = styled.tr`
&:nth-child(even){
    background-color: #ecf1f4;
}
`