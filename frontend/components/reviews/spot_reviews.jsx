import React from 'react';
import ReactStars from 'react-stars';
import SpotReviewsIndexItem from './spot_reviews_index_item';

class SpotReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.show =  this.props.show;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleCancel(e) {
    if (this.props.formType === 'create') {
      this.setState({ body: '', show: false });
    } else {
      this.setState({ show: false });
    }
  }

  renderCreate() {
    return (
      <button className='review-create-button' onClick={this.handleSubmit}>Create</button>
    );
  }

  renderUpdate() {
    return (
      <button className='review-create-button' onClick={this.handleSubmit}>Update</button>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === 'create') {
      this.props.createReview(this.state);
    } else if (this.props.formType === 'edit') {
      this.props.updateReview(this.state);
    }
    this.handleHide();
    e.stopPropagation();
  }

  handleRating(e) {
    this.setState({ rating: e });
  }

  render() {
    if (this.state.show) {
      return (
        <div className="create-review-container">
          <form id='review-create-form' onSubmit={this.handleSubmit}>
            <ReactStars
              onChange={this.handleRating}
              className='stars'
              count={5}
              value={this.state.rating}
              size={20}
              edit={true}
              half={false}
              color2={'#008489'}
              />
            <label className='review-label'>Leave a review:</label>
            <textarea
              className='review-body-input'
              type='textarea'
              value={this.state.body}
              onChange={this.update('body')}
              form='review-create-form'
              />
            <div className='review-create-cancel'>
              {this.props.formType === 'create' ? this.renderCreate() : this.renderUpdate()}
              <button className='review-cancel-button' onClick={this.handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      );
    } else if (this.props.formType === 'create'){
      return (
        <div>
          <button className='review-form-open' onClick={this.handleShow}>Leave a Review</button>
        </div>
      );
    } else if (this.props.formType === 'edit') {
      return (
        <SpotReviewsIndexItem review={this.state}/>
      );
    }

    // if (this.props.currentUser && this.state.render &&
    //     (this.props.bookingIds.filter(id => id === this.props.spotId).length > this.props.reviewIds.filter(id => id === this.props.spotId).length)) {
    //       return (
    //         <div className="create-review-container">
    //           <form id='review-create-form' onSubmit={this.handleSubmit}>
    //             <ReactStars
    //               onChange={this.handleRating}
    //               className='stars'
    //               count={5}
    //               value={this.state.rating}
    //               size={20}
    //               edit={true}
    //               half={false}
    //               color2={'#008489'}
    //               />
    //             <label className='review-label'>Leave a review:</label>
    //             <textarea
    //               className='review-body-input'
    //               type='textarea'
    //               value={this.state.body}
    //               onChange={this.update('body')}
    //               form='review-create-form'
    //               />
    //             <div className='review-create-cancel'>
    //               <button className='review-create-button' onClick={this.handleSubmit}>Create</button>
    //               <button className='review-cancel-button' onClick={this.handleCancel}>Cancel</button>
    //             </div>
    //           </form>
    //         </div>
    //       );
    // } else {
    // return null;
    // }
  }

}

export default SpotReview;
