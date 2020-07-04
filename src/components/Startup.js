import React from 'react';
import { Table } from 'reactstrap';
import ListStartup from './ListStartup';
import { connect } from 'react-redux';

const Startup = (props) => {
  const { startups } = props;

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Company</th>
          <th>Market/industry</th>
          <th>Location</th>
          <th>Joined</th>
          <th>Approved</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {startups &&
          startups.map((startup) => {
            return <ListStartup startup={startup} key={startup.id} />;
          })}
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    startups: state.startups,
  };
};

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Startup);
