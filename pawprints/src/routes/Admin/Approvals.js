import React from 'react';
import ApprovalItem from '../../components/ApprovalItem';
import './Approvals.css';

const Approvals = () => {
  const approvals = [
    { username: 'petlover1', pet: 'Cat', description: 'Lorem ipsum' },
    { username: 'doggylover', pet: 'Dog', description: 'Lorem ipsum' },
    { username: 'catlady', pet: 'Cat', description: 'Lorem ipsum' },
    { username: 'furballfan', pet: 'Bird', description: 'Lorem ipsum' },
  ];

  return (
    <div className="approvals-page">
      <h1>Approvals</h1>
      <div className="approvals-list">
        {approvals.map((approval, index) => (
          <ApprovalItem
            key={index}
            username={approval.username}
            pet={approval.pet}
            description={approval.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Approvals;
