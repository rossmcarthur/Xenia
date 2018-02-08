class Api::ReviewsController < ApplicationController

  def new
  end

  def index
    @reviews = Review.where("spot_id = ?", params[:spot_id])
    render :index
  end

  def create
    @review = current_user.reviews.create(review_params)
      if @review.save
        render :show
      else
        render json: @review.errors.full_messages, status: 422
      end
  end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:title, :body, :spot_id, :author_id, :rating)
  end

end
