class MoviesController < ApplicationController
    def index
        render json: Movie.all
    end

    def create
        movie = Movie.create(movie_params)
    end

    def destroy
        movie = Movie.find_by(id: params[:id])
        movie.destroy
        render json: {message: "Success!"}
    end

    private
    def movie_params
        params.require(:movie).permit(:title, :watch_list_id)
    end
end
