class MoviesController < ApplicationController
    def index
        render json: Movie.all
    end

    def create
        movie = Movie.create(movie_params)
        render json: movie
    end

    def destroy
        movie = Movie.find_by(id: params[:id])
        movie.destroy
        render json: {message: "Successfully drop the watchlist!", id: params[:id]}
    end

    private
    def movie_params
        params.require(:movie).permit(:title, :watch_list_id)
    end
end
