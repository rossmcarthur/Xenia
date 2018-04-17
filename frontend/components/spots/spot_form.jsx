import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Counter from '../counter/counter';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: this.props.spot
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImagePreview = this.handleImagePreview.bind(this);
  }

  componentWillMount() {
    if (this.props.formType === "Edit") {
      this.props.fetchSpot(this.props.match.params.spotId).then(() => this.setState(this.props.spot));
    }
  }

  update(field) {
    return e => this.setState({
      spot: Object.assign({}, this.state.spot, {
        [field]: e.currentTarget.value
      })
    });
  }

  counterHandler(key, value) {
    this.setState( { spot: Object.assign({}, this.state.spot, { [key]: value })});
  }

  handleImagePreview(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({
        spot: Object.assign({}, this.state.spot, {
          imageUrl: reader.result, imageFile: file
        })
      }
    );
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: '', imageFile: null });
      }
    }

  previewAttachment() {
    if (this.state.spot.imageUrl) {
      return (
        <div>
          <img className='spot-create-upload-preview' src={this.state.spot.imageUrl}  alt='Spot Preview'/>
        </div>
      );
    } else {
      return null;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const file = this.state.spot.imageFile;
    const formData = new FormData();
    const geocoder = new google.maps.Geocoder();
    const address = this.state.spot.address;
    formData.append('spot[title]', this.state.spot.title);
    formData.append('spot[address]', this.state.spot.address);
    formData.append('spot[body]', this.state.spot.body);
    formData.append('spot[guests]', this.state.spot.guests);
    formData.append('spot[price]', this.state.spot.price);
    formData.append('spot[spot_type]', this.state.spot.spot_type);
    formData.append('spot[bathrooms]', this.state.spot.bathrooms);
    formData.append('spot[bedrooms]', this.state.spot.bedrooms);
    formData.append('spot[beds]', this.state.spot.beds);
    formData.append('spot[host_id]', this.state.spot.host_id);

    if (file) formData.append('spot[image]', file);

    geocoder.geocode({ address }, data => {
      const lat = data[0].geometry.location.lat();
      const lng = data[0].geometry.location.lng();
      this.setState({
        spot: Object.assign({}, this.state.spot, {
          lat: lat,
          lng: lng
          })
        }, () => {
          formData.append('spot[lat]', this.state.spot.lat);
          formData.append('spot[lng]', this.state.spot.lng);
          return (
          this.props.createSpot(formData, this.resetForm)
          );
        }
      );
    });
  }

  render () {
    if (this.props.formType === 'Create') {
      return (
        <div className='spot-create-grid'>
          <form className='spot-create-form' onSubmit={this.handleSubmit}>
            <div className='spot-create-content'>
              <div className='spot-create-image'>
                {this.previewAttachment()}
                <label>Upload Photo:</label>
                <input
                  className='spot-create-upload'
                  type='file'
                  name='Upload Photo'
                  onChange={this.handleImagePreview}
                  />
              </div>
              <div className='spot-create-location'>
                Location:
                <input
                  type='text'
                  className='spot-create-address'
                  value={this.state.spot.address}
                  placeholder="Address, City, Country"
                  onChange={this.update('address')}
                  />
              </div>
              <div className='spot-create-title-container'>
                Title:
                <input
                  type='text'
                  className='spot-create-title'
                  value={this.state.spot.title}
                  onChange={this.update('title')}
                  />
              </div>
              Description:
              <textarea
                type='textarea'
                className='spot-create-body'
                value={this.state.spot.body}
                onChange={this.update('body')}
                />
              <div className='spot-create-spot-type'>
                Spot Type:
                <input
                  className='spot-create-type'
                  value={this.state.spot.spot_type}
                  placeholder="(eg. Studio, 1 bedroom...)"
                  onChange={this.update('spot_type')}
                  />
              </div>
                <label>Price:
                  <input
                    type='number'
                    className='spot-create-price'
                    value={Number(this.state.spot.price)}
                    placeholder="Price"
                    onChange={this.update('price')}
                    />
                  </label>
              <div className='spot-create-guests'>
                <label className='label'>Guests
                </label>
                <Counter counterType='guests' counterHandler={this.counterHandler.bind(this)}/>
              </div>
              <div className='spot-create-bathrooms'>
                <label className='label'>Bathrooms
                </label>
                <Counter counterType='bathrooms' counterHandler={this.counterHandler.bind(this)}/>
              </div>
              <div className='spot-create-bedrooms'>
                <label className='label'>Bedrooms
                </label>
                <Counter counterType='bedrooms' counterHandler={this.counterHandler.bind(this)}/>
              </div>
              <div className='spot-create-beds'>
                <label className='label'>Beds
                </label>
                <Counter counterType='beds' counterHandler={this.counterHandler.bind(this)}/>
              </div>
              <input
                className='spot-create-submit'
                type='submit'
                value='Create Spot'
                />
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

export default SpotForm;
