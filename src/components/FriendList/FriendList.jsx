import PropTypes from 'prop-types';
import Friend from './Friend';
import { FriendsList } from './FriendListStyle';

const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <Friend
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                )
            })}
        </FriendsList>
    )
};

FriendList.propTypes = {
    Friend: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    )
};

export default FriendList;