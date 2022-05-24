import React from 'react';
import MEMBERS from '../data/members';
import MemberItem from './MemberItem';

const MemberList = () => {
    const members = MEMBERS.map((data => {
        return <MemberItem data={data} />;
    }))
    return (
        <div>
            <p>{members}</p>
        </div>
    );
};

export default MemberList;