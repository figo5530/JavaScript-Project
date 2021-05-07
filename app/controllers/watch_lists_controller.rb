class WatchListsController < ApplicationController
    def index
        render json: WatchList.all
    end

    def create
        watchlist = WatchList.create(watchlist_params)
        render json: watchlist
    end

    def destroy
        watchlist = WatchList.find_by(id: params[:id])
        watchlist.destroy
        render json: {message: "Success!"}
    end

    private
    def watchlist_params
        params.require(:watchlist).permit(:name)
    end

end
