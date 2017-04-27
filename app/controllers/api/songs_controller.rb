class Api::SongsController < ApplicationController
  def index
    if params[:artist_id]
      @songs = Song.where(artist_id: params[:artist_id]).includes(:artist).order('created_at DESC').limit(15)
    elsif params[:input]
      if params[:input] == 'search'
        @songs = Song.all
      else
        @songs = Song.where('title like ?', params[:input])
      end
    else
      @songs = Song.includes(:artist).order('created_at DESC').all.limit(15)
    end
  end

  def show
    @song = Song.includes(:artist).find(params[:id])
  end

  def create
    @song = Song.new(song_params)

    @song.artist_id = current_user.id
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def update
    @song = Song.find(params[:song][:id])

    if @song.update(song_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
  end

  private
  def song_params
    params.require(:song).permit(:title, :data, :album_id, :cover_art, :track_num)
  end
end
