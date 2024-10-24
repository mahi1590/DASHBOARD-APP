import React from 'react';
import { ListGroup } from 'react-bootstrap';

const RecentActivity = () => {
  const activities = ['User John made a purchase', 'New user registered', 'Payment processed'];

  return (
    <ListGroup>
      {activities.map((activity, index) => (
        <ListGroup.Item key={index}>{activity}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default RecentActivity;
