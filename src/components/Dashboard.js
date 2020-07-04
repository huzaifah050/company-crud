import React from 'react';
import { Container, Row } from 'reactstrap';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

function Dashboard() {
  return (
    <Container>
      <Row>
        <div className="col-md-3">
          <LeftPanel />
        </div>
        <div className="col-md-9">
          <RightPanel />
        </div>
      </Row>
    </Container>
  );
}

export default Dashboard;
