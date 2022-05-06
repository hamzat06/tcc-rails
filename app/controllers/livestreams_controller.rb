class LivestreamsController < ApplicationController
    def index
        @livestreams = Livestream.all
    end

    def show
        @livestream = Livestream.find(params[:id])
    end

    def new
    end
    
    def create
    end

    def edit
        @livestream = Livestream.find(params[:id])
    end

    def update
        @livestream = Livestream.find(params[:id])
        if @livestream.save?
            flash[notice] = "Livestream Url added successfully"
        else
            flash[notice] = "Error! Livestream Url was not added"
        end
    end
end
