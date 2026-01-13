import { useLocation } from 'react-router-dom';

const Profile = () => {
    const query = new URLSearchParams(useLocation().search);
    const name = query.get('name');
  return (
      <h1>{name}</h1>
    
  )
}

export default Profile
