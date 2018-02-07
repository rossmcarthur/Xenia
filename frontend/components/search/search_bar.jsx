import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidMount() {
    this.geocoder = new google.maps.Geocoder();
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
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({ search: "" });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <form onSubmit={this.handleSubmit} className="search-form">
            <input
              className="search-bar"
              type="text"
              placeholder="Anywhere"
              value={this.state.search}
              onChange={this.handleChange}>
            </input>
          </form>
          <button onClick={this.handleClear} className="search-close-icon">&times;</button>
        </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            className="search-bar"
            type="text"
            placeholder="Anywhere"
            value={this.state.search}
            onChange={this.handleChange}>
          </input>
        </form>
        <button onClick={this.handleClear} className="search-close-icon">&times;</button>
      </div>
    );
  }
  }
}

export default SearchBar;
