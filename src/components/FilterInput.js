import React, { Component } from 'react';
import { InputGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';


class FilterInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { startups } = this.props;
    let companies = startups.map((startup) => {
      return startup.company;
    });
    if (companies.indexOf(this.state.filter)) {
      return (
        <InputGroup>
          <Input
            placeholder="Filter Startups"
            name="filter"
            onChange={this.handleChange}
            value={this.state.filter}
          />
        </InputGroup>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  startups: state.startups,
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(FilterInput);
