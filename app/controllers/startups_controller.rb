class StartupsController < ApplicationController

    def index
        render json: Startup.all, include: :category
    end
end

