class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where('song_id = ?', params[:song_id]).includes(:author).order('created_at DESC')
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy

  end

  private
  def comment_params
    params.require(:comment).permit(:body, :song_id, :author_id)
  end
end
