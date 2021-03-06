import React from 'react';
import { withRouter } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.input = document.getElementById('search-input');
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    this.geocoder = new google.maps.Geocoder();
    this.input = document.getElementById('search-input');
    const options = {
      types: ['address']
    };
    this.autocomplete = new google.maps.places.Autocomplete(this.input, options);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.geocoder.geocode({'address': this.state.search},
      (response)=>{
      const center = response[0].geometry.location.toJSON();
      this.props.receiveMapLocation(center);
    });
    if (!this.props.history.location.pathname.includes("spots")) {
        this.props.history.push("spots");
    } else if (this.props.history.location.pathname.includes("spots/")) {
      this.props.history.goBack();
    }
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({ search: "" });
  }

  render() {
    if (this.props.history.location.pathname.includes("/spots") || this.props.history.location.pathname.includes('/bookings')) {
      return (
        <div className="search-container">
          <form onSubmit={this.handleSubmit} className="search-form">
            <div className='search-bar-input'>
              <i  id='search-icon' className="fas fa-search"></i>
              <input
                id='search-input'
                className="search-bar"
                type="text"
                placeholder="Anywhere"
                value={this.state.search}
                onChange={this.handleChange}>
              </input>
          </div>
          </form>
        </div>
    );
  } else {
    return (
      <div className='home-search'>
        <form onSubmit={this.handleSubmit} className="home-search-form">
          <input
            id='search-input'
            className="home-search-bar"
            type="text"
            placeholder="Anywhere"
            value={this.state.search}
            onChange={this.handleChange}>
          </input>
        </form>
        <button onClick={this.handleSubmit} className="home-search-button">Search</button>
      </div>
    );
  }
  }
}

export default withRouter(SearchBar);
