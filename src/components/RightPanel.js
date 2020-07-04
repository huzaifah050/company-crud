import React from 'react';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';
import Startup from './Startup';
import FilterInput from './FilterInput';

const RightPanel = (props) => {
  return (
    <Card>
      <CardHeader tag="h3">All Startups</CardHeader>
      <CardBody>
        <FilterInput />
        <CardText>
          <Startup />
        </CardText>
      </CardBody>
    </Card>
  );
};

export default RightPanel;
