import React from 'react'
import InvestorCard from './InvestorCard';
import UserPledges from './UserPledges';

// rafe shortcut
const Profile = (props) => {
    let { user } = props;
    let contactInfo = {
        name: user.username,
        email: `${user.username}@example.com`,
        id: user.id
    }


    return (
        <div>
            <InvestorCard contact={contactInfo}/>
            <UserPledges user={user} />
        </div>
    )
}

export default Profile
