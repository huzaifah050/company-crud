import React from 'react';
import { Button } from 'reactstrap';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteCompany } from '../store/actions';
import EditModal from './EditModal';

function ListStartup({ startup, deleteCompany }) {
  let color;

  if (startup.approved) {
    color = 'success';
  } else {
    color = 'danger';
  }

  const handleDelete = (id) => {
    deleteCompany(startup.id);
  };
  return (
    <tr>
      <td>{startup.company}</td>
      <td>{startup.industry}</td>
      <td>{startup.location}</td>
      <td>{moment(startup.joined).calendar()}</td>
      <td>
        <Button color={color} id="appvd">
          {startup.approved ? (
            <i className="fas fa-check"></i>
          ) : (
            <i className="fas fa-times"></i>
          )}
        </Button>
      </td>
      <td>
        <div className="btns">
          <EditModal id={startup.id} />
          <Button className="trash" color="danger" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  deleteCompany,
};

export default connect(null, mapDispatchToProps)(ListStartup);
