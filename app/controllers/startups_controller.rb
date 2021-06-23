class StartupsController < ApplicationController

    def index
        render json: Startup.all, include: :category
    end

    def show
        startup = Startup.find(params[:id])

        render json: startup, include: :category
    end
end

