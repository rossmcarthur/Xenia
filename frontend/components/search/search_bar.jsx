import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-bar"
            type="text"
            placeholder="Anywhere"
            value={this.state.search}
            onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
