import React from 'react';

const MemberItem = ({data}) => {
    return (
        <div>
            {data.firstName} {data.lastName}
        </div>
    );
};

export default MemberItem;