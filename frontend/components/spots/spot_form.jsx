import React from 'react';
import { Link } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Counter from '../counter/counter';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;
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
      [field]: e.currentTarget.value
    });
  }

  counterHandler(key, value) {
    this.setState( { [key]: value });
  }

  handleImagePreview(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ imageUrl: '', imageFile: null });
      }
    }


  previewAttachment() {
    if (this.state.imageUrl) {
      return (
        <div>
          <img className='spot-create-upload-preview' src={this.state.imageUrl}  alt='Spot Preview'/>
        </div>
      );
    } else {
      return null;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === 'Create') {
      const file = this.state.imageFile;

      const formData = new FormData();
      formData.append("post[title]", title);
      if (file) formData.append("post[image]", file);
  this.props.createPost(formData);
    } else if (this.props.formType === 'Edit') {
      this.props.updateSpot(this.state);
    }

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
                  value={this.state.address}
                  placeholder="Address, City, Country"
                  onChange={this.update('address')}
                  />
              </div>
              <div className='spot-create-title-container'>
                Title:
                <input
                  type='text'
                  className='spot-create-title'
                  value={this.state.title}
                  onChange={this.update('title')}
                  />
              </div>
              Description:
              <textarea
                type='textarea'
                className='spot-create-body'
                value={this.state.body}
                onChange={this.update('body')}
                />
              <div className='spot-create-spot-type'>
                Spot Type:
                <input
                  className='spot-create-type'
                  value={this.state.spot_type}
                  placeholder="(eg. Studio, 1 bedroom...)"
                  onChange={this.update('spot_type')}
                  />
              </div>
                <label>Price:
                  <input
                    type='number'
                    className='spot-create-price'
                    value={this.state.price}
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
