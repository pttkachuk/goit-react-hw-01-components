import styled from 'styled-components';
export const FriendsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
border-radius: 10px;
max-width:280px;
margin-bottom: 10px;
box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;

export const StatusSpan = styled.span`
 width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${prop => {
        if (prop.color === "true") {
            return `green`
        } else {
            return `red`
        }
    }};
`;

export const FriendName = styled.p`
margin: 0 0 0 15px;
font-size: 25px;
font-weight: 500;
`;