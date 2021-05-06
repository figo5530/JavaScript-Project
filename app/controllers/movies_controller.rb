class MoviesController < ApplicationController
    def index
        render json: Movie.all
    end

    def destroy
        movie = Movie.find_by(id: params[:id])
        movie.destroy
        render json: {message: "Success!"}
    end
end
