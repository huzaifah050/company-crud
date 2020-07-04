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
import { addCompany } from '../store/actions';
import { connect } from 'react-redux';

const AddModal = (props) => {
  const { buttonLabel, className } = props;

  const [name, setName] = useState({
    company: '',
    industry: '',
    location: '',
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
      id: uuid(),
      company: name.company,
      industry: name.industry,
      location: name.location,
      approved: id.approved,
      joined: new Date(),
    };

    // console.log(newCompany);
    props.addCompany(newCompany);
    setChecked({
      approved: false,
    });
  };

  return (
    <div>
      {/* <Button onClick={toggle}>Add Startup</Button> */}
      <ListGroupItem tag="button" action onClick={toggle}>
        <i className="fas fa-plus icon"></i> Add Startup
      </ListGroupItem>
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
                />
              </div>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={toggle}>
              Add Startup
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

const mapDispatchToProps = {
  addCompany,
};

export default connect(null, mapDispatchToProps)(AddModal);
