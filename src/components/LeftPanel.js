import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import AddModal from './AddModal';

const LeftPanel = (props) => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem active tag="button" action>
          <i className="fas fa-cog icon"></i>
          Dashboard
        </ListGroupItem>
        <AddModal />
        <ListGroupItem tag="button" action>
          <i className="far fa-newspaper icon"></i> Startup Details
        </ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default LeftPanel;
