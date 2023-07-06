import styled from 'styled-components';

export const ProfileDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
border: none;
background-color: #7CB9E8;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
max-width: 280px;
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
    max-width: 250px;
    border-radius: 50%;
    background-color: #e7eeeeed;
    padding:20px 10px 0;
    margin-bottom: 10px;
}
p{
    margin:0;
    margin-bottom: 10px;
}
`;

export const ProfileList = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;
padding-left: 0;
border-radius: 10px;
background-color:#e7eeeeed ;

li{
    margin: 6px;
    padding: 0;
    text-align: center;
}
`;

export const UserText = styled.p`
font-size: 35px;
font-weight: 500;
`;

export const CityText = styled.p`
font-size:20px;
font-weight: 500;
`;

export const StatusText = styled.span`
font-weight: 600;
`;
export const SecondText = styled.span`
color: #A9A9A9;
`