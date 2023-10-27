import React from 'react';

const UserDisplay = ({ user, onLogout }) => {
    return (
        <div>
            <p>Currently logged in as, {user.email}!</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default UserDisplay;
