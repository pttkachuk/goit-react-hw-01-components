import styled from 'styled-components';
export const Statistic = styled.section`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-items: center;
border: none;
background-color: #E0E0E0;
border-radius: 10px;
max-width: 280px;
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
padding: 10px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const StatsTitle = styled.h2`
margin: 0;
padding-top: 5px;
padding-bottom: 5px;
font-size: 35px;
font-weight: 600;;
`;

export const StatsList = styled.ul`
max-width: 250px;
padding:0px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const StatsListItem = styled.li`
padding-left: 6px;
padding-right: 6px;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const StatsLabel = styled.span`
font-weight: 600;
`;

export const StatsPercent = styled.span`
font-style:italic;
`;