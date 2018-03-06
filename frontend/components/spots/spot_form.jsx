import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Counter from '../counter/counter';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: this.props.spot,
      user: this.props.user
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.formType === "Edit") {
      this.props.fetchSpot(this.props.match.params.spotId).then(() => this.setState(this.props.spot));
    }
  }

  update(field) {
    return e => this.setState({
      [spot.field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === 'Create') {
      this.props.createSpot(this.state.spot);
    } else if (this.props.formType === 'Edit') {
      this.props.updateSpot(this.state.spot);
    }
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  render () {
    if (this.props.formType === 'Create') {
      return (
        <div>
          <form className='spot-create-form' onSubmit={this.handleSubmit}>
            <div className='spot-create-content'>
              <input
                type='text'
                className='spot-create-title'
                value={this.state.spot.title}
                placeholder="Title"
                onChange={this.update('title')}
                />
              <input
                type='text'
                className='spot-create-address'
                value={this.state.spot.address}
                placeholder="Address"
                onChange={this.update('address')}
                />
              <textarea
                type='textarea'
                className='spot-create-body'
                value={this.state.spot.body}
                onChange={this.update('body')}
                />
                <input
                  className='spot-create-type'
                  value={this.state.spot.spot_type}
                  placeholder="Spot Type (eg. Studio, 1 bedroom...)"
                  onChange={this.update('spot_type')}
                  />
                <label>Price:
                  <input
                    type='number'
                    className='spot-create-price'
                    value={this.state.spot.price}
                    placeholder="Price"
                    onChange={this.update('price')}
                    />
                  </label>
              <label>Guests:
              </label>
                <Counter />
              <label>Bathrooms:
              </label>
                <Counter />
              <label>Bedrooms:
              </label>
                <Counter />
              <label>Beds:
              </label>
                <Counter />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h1> WHATEVER </h1>
        </div>
      );
    }

  }

}

// <select
//   className='spot-create-bedrooms'
//   value={this.state.spot.bedrooms}
//   onChange={this.update('bedrooms')}
//   >
//     <option value='1'>1</option>
//     <option value='2'>2</option>
//     <option value='3'>3</option>
//     <option value='4'>4</option>
//     <option value='5'>5</option>
// </select>


// <select
//   className='spot-create-guests'
//   value={this.state.spot.guests}
//   onChange={this.update('guests')}
//   >
//     <option value='1'>1</option>
//     <option value='2'>2</option>
//     <option value='3'>3</option>
//     <option value='4'>4</option>
//     <option value='5'>5</option>
//     <option value='6'>6</option>
//     <option value='7'>7</option>
//     <option value='8'>8</option>
//     <option value='8'>9</option>
//     <option value='10'>10</option>
// </select>
export default SpotForm;
