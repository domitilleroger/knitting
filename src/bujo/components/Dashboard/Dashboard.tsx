import React from 'react';

import './Bujo.scss';
import CreateTracker from 'bujo/components/Tracker/CreateTracker';

function Dashboard() {
  return (
    <div className="bujo">
      dashboard bujo
      <CreateTracker />
    </div>
  );
}

export default Dashboard;
