import styled from 'styled-components';

export const ProfileDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
border: none;
background-color: #7CB9E8;
border-radius: 10px;
max-width: 300px;
margin-top: 20px;
margin-bottom: 20px;
margin-left: auto;
margin-right: auto;
padding: 10px;
`;

export const DescrProfile = styled.div`
display: flex;
flex-direction: column;
align-items: center;
img{
    max-width: 150px;
}
p{
    margin:0;
    padding-top: 5px;
    padding-bottom: 5px;
}
`;

export const ProfileList = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items:center;
margin: 0;
padding: 0;
background-color: white;
border-radius:10px;

li{
    margin: 0;
    padding: 0;
    text-align: center;
}
`