import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
  ListGroupItem,
} from 'reactstrap';
import uuid from 'react-uuid';
import { editCompany } from '../store/actions';
import { connect } from 'react-redux';

const EditModal = (props) => {
  const { buttonLabel, className } = props;

  const [name, setName] = useState({
    company: props.startup.company,
    industry: props.startup.industry,
    location: props.startup.location,
    id: props.startup.id,
  });

  const handleChange = (e) => {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    });
  };

  const [id, setChecked] = useState({
    approved: false,
  });
  const handleChecked = (e) => {
    setChecked({
      [e.target.id]: e.target.checked,
    });
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCompany = {
      id: name.id,
      company: name.company,
      industry: name.industry,
      location: name.location,
      approved: id.approved,
      joined: new Date(),
    };

    // console.log(newCompany);
    props.editCompany(props.id, newCompany);
    setChecked({
      approved: false,
    });
  };

  // console.log(props.id);

  return (
    <div>
      <Button onClick={toggle} color="primary">
        <i className="fas fa-pencil-alt"></i>
      </Button>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={toggle} close={closeBtn}>
            Add Startup
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Company name</Label>
              <Input
                type="text"
                name="company"
                id="company"
                placeholder="Company name"
                onChange={handleChange}
                value={name.company}
              />
            </FormGroup>
            <FormGroup>
              <Label for="industry">Industry</Label>
              <Input
                type="text"
                name="industry"
                id="industry"
                placeholder="Industry"
                onChange={handleChange}
                value={name.industry}
              />
            </FormGroup>

            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                onChange={handleChange}
                value={name.location}
              />
            </FormGroup>

            <FormGroup>
              <Label for="approved">Approved?</Label>
              <div>
                <CustomInput
                  type="switch"
                  id="approved"
                  name="approved"
                  label="Turn on if approved."
                  onChange={handleChecked}
                  value={name.approved}
                />
              </div>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={toggle}>
              Update Startup
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.id);
  let id = ownProps.id;
  return {
    startup: state.startups.find((startup) => startup.id === id),
  };
};

const mapDispatchToProps = {
  editCompany,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
