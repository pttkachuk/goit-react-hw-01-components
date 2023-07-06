import PropTypes from 'prop-types';
import { FriendsItem, StatusSpan, FriendName } from './FriendStyle';
const Friend = ({ avatar, name, isOnline }) => {
    return (
        <FriendsItem>
            <StatusSpan color={isOnline.toString()}></StatusSpan>
            <img src={avatar} alt={name} width="50" />
            <FriendName>{name}</FriendName>
        </FriendsItem>
    )
};

Friend.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default Friend;