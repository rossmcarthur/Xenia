import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;
  }

  componentWillMount() {
    if (this.props.formType === "Edit") {
      this.props.fetchSpot(this.props.match.params.spotId).then(() => this.setState(this.props.spot));
    }
  }

  render () {
    return (
      <h1>This is the Spot Create Form!</h1>
    );
  }

}

export default SpotForm;
