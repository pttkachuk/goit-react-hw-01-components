import PropTypes from 'prop-types';
import Friend from './Friend';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({id, avatar, name, isOnline}) => {
                return (
                    <Friend
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                )
            })}
        </ul>
    )
};

FriendList.propTypes = {
    Friend: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
};

export default FriendList;