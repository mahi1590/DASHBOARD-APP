import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PerformanceMetrics = () => {
  return (
    <div>
      <h5>CPU Usage</h5>
      <ProgressBar now={70} label="70%" />
      <h5>Memory Usage</h5>
      <ProgressBar now={50} label="50%" />
      <h5>Disk Usage</h5>
      <ProgressBar now={90} label="90%" />
    </div>
  );
};

export default PerformanceMetrics;
