import PropTypes from 'prop-types';
import { ProfileDiv, DescrProfile, ProfileList, UserText, CityText, StatusText,SecondText } from './profileStyled';
const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
    return (
<ProfileDiv>
  <DescrProfile>
    <img
      src={avatar}
      alt="User avatar"
    
    />
    <UserText>{username}</UserText>
    <p>@{tag}</p>
    <CityText>{location}</CityText>
  </DescrProfile>

  <ProfileList>
    <li>
      <SecondText>Followers </SecondText>
      <StatusText>{followers}</StatusText>
    </li>
    <li>
      <SecondText>Views </SecondText>
      <StatusText>{views}</StatusText>
    </li>
    <li>
      <SecondText>Likes </SecondText>
      <StatusText>{likes}</StatusText>
    </li>
  </ProfileList>
</ProfileDiv>
    )
}

Profile.propTypes={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile;